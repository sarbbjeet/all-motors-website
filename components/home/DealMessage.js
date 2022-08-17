import { f1, f2 } from "../../styles/variables.module.scss";
export default function DealMessage() {
  return (
    <div className="mx-4 mt-5 p-4 border border-light shadow rounded">
      <p>
        If you live in Edinburgh and are looking for a used car, All Motors Ltd
        can provide you car with very reasonable price and make your search much
        easier, whether of the make or model you&apos;re looking for or your
        budget.
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
