import { f2 as ff } from "../../styles/variables.module.scss";
export default function VideoSection({
  link = "https://www.youtube.com/embed/uHhvdoCGnbI?rel=0&amp;showprimary=0&autoplay=0",
}) {
  return (
    <section className="bg-white p-3 px-lg-4 pt-4 pb-5 border mb-4 d-print-none">
      <header className="border-bottom border-dark mb-4">
        <h4 className="text-dark font-weight-bold mb-3">Watch the video</h4>
      </header>
      <div className="text-muted">
        <div className="embed-responsive embed-responsive-16by9 mb-3">
          <embed
            className="embed-responsive-item"
            src={link}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>

      <style jsx>{`
        h4 {
          font-family: ${ff};
        }
      `}</style>
    </section>
  );
}
