/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function CurrencySelect() {
  const [currency, setCurrency] = useState("USD");
  const [status, setStatus] = useState(false);

  const currency_items = [
    {
      id: 0,
      title: "USD",
      code: "USD",
      symbol: "$",
    },
    {
      id: 1,
      title: "UZS",
      code: "UZS",
      symbol: "сум",
    },
  ];

  return (
    <div className="LangugeSelect__headerLanguage" style={{ marginLeft: "10px" }}>
      <div
        className="language__taskAdderSelect"
        onMouseEnter={() => setStatus(true)}
        onMouseLeave={() => setStatus(false)}
      >
        <p>{currency}</p>
        <div
          className={
            status ? "language__taskAdderStatus" : "language__taskHide__status"
          }
          style={{ width: "80px" }}
        >
          {currency_items.map((item) => (
            <div
              className="language__status"
              onClick={() => {
                setCurrency(item.code);
                setStatus(false);
              }}
              key={item.id}
            >
              <p>{item.symbol} {item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrencySelect;
