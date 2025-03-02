import designs from "../data/designs"
import "../styles/DesignDetails.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function DesignDetails() {
    const id = parseInt(window.location.href.split("/").pop())
    const design = designs.find((design) => design.id === id)

    return (
        <div className="design-details flex flex-col items-center px-5 md:px-8 md:px-10 min-h-[80vh]">
            <div className="flex flex-col items-center p-5 md:p-8 md:px-10 rounded-xl min-w-[90%]">
                <h1 className="text-3xl">{design.title}</h1>

                <div className="px-3 my-2 flex flex-col items-center">
                    <p className="text-center opacity-80 leading-relaxed">{design.longDescription}</p>
                </div>

                <Swiper
                    modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    speed={1200}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    loop={true}
                    coverflowEffect={{
                        depth: 100,
                        modifier: 0.5,
                        rotate: 0,
                        scale: 0.7,
                        slideShadows: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: "swiper-pagination-bullet-active scale-125",
                        bulletClass: "swiper-pagination-bullet",
                    }}
                    className="w-[70%] max-w-screen-lg"
                >
                    {design.images.map((image, index) => (
                        <SwiperSlide
                            key={index}
                            className="relative w-full transition-all duration-500"
                        >
                            <img
                                src={image}
                                alt={design.title}
                                className="m-5 w-full object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default DesignDetails

