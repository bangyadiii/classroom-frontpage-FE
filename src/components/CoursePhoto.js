import PlayIcon from "public/images/btn_play.svg";
import Modal from "./modal";

export default function CoursePhoto({ data }) {
    return (
        <div className="w-1/3 px-4">
            <div className="item">
                <figure className="item-image">
                    <PlayIcon className="play-btn fill-orange" />
                    <img
                        src={data}
                        alt={`gambar`}
                        className="object-cover w-full h-32"
                    />
                </figure>
                <Modal content={(toggle) => <img src={data} alt={data} />}>
                    {(toggle) => (
                        <span onClick={toggle} className="link-wrapped"></span>
                    )}
                </Modal>
            </div>
        </div>
    );
}
