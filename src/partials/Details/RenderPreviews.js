import React from "react";
import Youtube from "react-youtube";
import Accordion, { IconLock, IconPlay, Item } from "src/components/Accordion";
import Modal from "src/components/modal";

export default function RenderPreviews({ previews }) {
    return (
        <div className="accordion">
            <Accordion>
                {(Active, toggle) => {
                    return previews?.map((item, index) => (
                        <Item
                            id={item?.id}
                            name={item?.name}
                            child={item?.lessons}
                            active={Active}
                            toggle={toggle}
                            key={`${index}-${item?.id}`}
                        >
                            {item?.lessons?.length > 0 &&
                                item?.lessons?.map((child, i) => {
                                    return (
                                        <div
                                            className="relative hover:bg-gray-200 flex justify-between items-center pl-8 pr-4 py-2"
                                            key={child?.id}
                                        >
                                            <span className="text-gray-500">
                                                {child?.name ?? "Lesson Name"}
                                            </span>
                                            {i === 0 && (
                                                <Modal
                                                    content={(toggleModal) => (
                                                        <Youtube
                                                            videoId={
                                                                child?.video
                                                            }
                                                            id={child?.video}
                                                            opts={{
                                                                playerVars: {
                                                                    autoplay: 1,
                                                                    controls: 1,
                                                                    showinfo: 1,
                                                                },
                                                            }}
                                                        ></Youtube>
                                                    )}
                                                >
                                                    {(toggleModal) => (
                                                        <span
                                                            className="link-wrapped"
                                                            onClick={
                                                                toggleModal
                                                            }
                                                        ></span>
                                                    )}
                                                </Modal>
                                            )}
                                            {i === 0 && (
                                                <IconPlay
                                                    className="fill-teal-500"
                                                    height={20}
                                                    width={20}
                                                />
                                            )}
                                            {i !== 0 && (
                                                <IconLock
                                                    className="fill-teal-500"
                                                    height={20}
                                                    width={20}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                        </Item>
                    ));
                }}
            </Accordion>
        </div>
    );
}
