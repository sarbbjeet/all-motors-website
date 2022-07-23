import { f1, f2 } from "../../styles/variables.module.scss";
export default function DealMessage() {
  return (
    <div className="mx-4 mt-5 p-4 border border-light shadow rounded">
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
              font-size: 1rem !important;
              font-family: ${f2} !important;
            }
          }
          p {
            font-size: 1.2rem;
            font-family: ${f2} !important;
            font-weight: 300;
          }
        `}
      </style>
    </div>
  );
}
