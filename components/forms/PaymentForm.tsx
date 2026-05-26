"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { cn, formatCurrency } from "@/lib/utils";
import { CreditCardIcon, CheckCircleIcon } from "@/components/ui/Icons";

interface PaymentFormProps {
  amount: number;
  description: string;
  onSuccess: (transactionId: string) => void;
  isLoading?: boolean;
}

type Method = "upi" | "card" | "netbanking";

export default function PaymentForm({ amount, description, onSuccess, isLoading: externalLoading }: PaymentFormProps) {
  const [method, setMethod] = useState<Method>("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (method === "upi") {
      if (!upiId.includes("@")) errs.upiId = "Enter a valid UPI ID (e.g. name@upi)";
    } else if (method === "card") {
      if (cardNum.replace(/\s/g, "").length < 16) errs.cardNum = "Enter valid 16-digit card number";
      if (!cardName) errs.cardName = "Enter name on card";
      if (expiry.length < 5) errs.expiry = "Enter valid expiry (MM/YY)";
      if (cvv.length < 3) errs.cvv = "Enter valid CVV";
    }
    return errs;
  };

  const handlePay = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    onSuccess(`TXN-${Date.now()}`);
  };

  const formatCard = (v: string) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const formatExpiry = (v: string) => {
    const digits = v.replace(/\D/g, "").slice(0, 4);
    return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
  };

  return (
    <div className="space-y-6">
      {/* Amount Summary */}
      <div className="bg-[#EBF0FF] border border-[#C7D4F0] rounded-2xl p-5 flex items-center justify-between">
        <div>
          <p className="text-[12px] font-medium text-[#0A2A76] uppercase tracking-wide">Amount Payable</p>
          <p className="text-[32px] font-bold text-[#1A202C]">{formatCurrency(amount)}</p>
          <p className="text-xs text-[#718096] mt-0.5">{description}</p>
        </div>
        <CreditCardIcon size={32} className="text-[#0A2A76]" />
      </div>

      {/* Payment Method Selector */}
      <div>
        <p className="text-sm font-semibold text-[#374151] mb-3">Select Payment Method</p>
        <div className="grid grid-cols-3 gap-2">
          {(["upi", "card", "netbanking"] as Method[]).map((m) => (
            <button
              key={m}
              onClick={() => setMethod(m)}
              className={cn(
                "py-3 px-2 text-sm font-semibold rounded-xl border transition-all capitalize",
                method === m
                  ? "border-2 border-[#0A2A76] bg-[#EBF0FF] text-[#0A2A76]"
                  : "border border-[#E2E8F0] text-[#718096] hover:border-[#CBD5E0]"
              )}
            >
              {m === "upi" ? "UPI" : m === "card" ? "Card" : "Net Banking"}
            </button>
          ))}
        </div>
      </div>

      {/* Method Forms */}
      {method === "upi" && (
        <Input
          label="UPI ID"
          placeholder="yourname@upi"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          error={errors.upiId}
          fullWidth
        />
      )}

      {method === "card" && (
        <div className="space-y-4">
          <Input
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            value={cardNum}
            onChange={(e) => setCardNum(formatCard(e.target.value))}
            error={errors.cardNum}
            fullWidth
          />
          <Input
            label="Name on Card"
            placeholder="RAJESH KUMAR"
            value={cardName}
            onChange={(e) => setCardName(e.target.value.toUpperCase())}
            error={errors.cardName}
            fullWidth
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Expiry (MM/YY)"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              error={errors.expiry}
              fullWidth
            />
            <Input
              label="CVV"
              placeholder="•••"
              type="password"
              maxLength={4}
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
              error={errors.cvv}
              fullWidth
            />
          </div>
        </div>
      )}

      {method === "netbanking" && (
        <div className="grid grid-cols-2 gap-2">
          {["SBI", "HDFC", "ICICI", "Axis", "Kotak", "PNB"].map((bank) => (
            <button
              key={bank}
              className="py-3 text-sm font-medium border border-[#E2E8F0] rounded-xl hover:border-[#0A2A76] hover:bg-[#EBF0FF] hover:text-[#0A2A76] transition-all"
            >
              {bank} Bank
            </button>
          ))}
        </div>
      )}

      <Button
        fullWidth
        size="lg"
        onClick={handlePay}
        isLoading={loading || externalLoading}
      >
        <CheckCircleIcon size={18} />
        Pay {formatCurrency(amount)} Securely
      </Button>

      <p className="text-[11px] text-center text-[#9CA3AF] mt-3">
        🔒 Secured with 256-bit SSL encryption
      </p>
    </div>
  );
}
