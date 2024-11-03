import React, { useState, useRef, useEffect } from "react";

interface OTPInputProps {
  numInputs: number;
}

const OTPInput: React.FC<OTPInputProps> = ({ numInputs }) => {
  const [otp, setOtp] = useState(Array(numInputs).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, numInputs);
  }, [numInputs]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < numInputs - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const pasteData = e.clipboardData
      .getData("text")
      .split("")
      .filter((char) => /^\d$/.test(char));
    if (pasteData.length === numInputs) {
      setOtp(pasteData);
      inputsRef.current[numInputs - 1]?.blur();
    }
  };

  return (
    <div onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputsRef.current[index] = el)}
          style={{ width: "2rem", marginRight: "0.5rem", textAlign: "center" }}
        />
      ))}
    </div>
  );
};

const OTPPage: React.FC = () => {
  return (
    <div>
      <h1>Enter OTP</h1>
      <OTPInput numInputs={6} />
    </div>
  );
};

export default OTPPage;
