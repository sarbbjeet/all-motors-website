export default function DealMessage() {
  return (
    <div
      style={{ borderRadius: "10px" }}
      className="mx-4 mt-5 p-4 border border-light shadow"
    >
      <p>
        If you&apos;re based in Edinburgh and are looking for a used car,
        allmotors.co.uk can provide you with the details of 14 used car
        dealerships to make your car search a lot easier, whether you&apos;re
        searching by make or model and no matter what the budget.
      </p>

      <style jsx>
        {`
          @media (max-width: 768px) {
            p {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
}
