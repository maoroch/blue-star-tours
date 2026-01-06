"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import Slider from 'react-slick';

const Testimonial1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }; 

    const testimonialContent = [
              {img:'/assets/img/testimonial/client-3.png', subtitle:'2ГИС', title:'​Aruzhan Abdugapparova', content:'Хочется сказать огромное спасибо турагентству Seastar и особенно нашему любимому турагенту Айман! Мы уже не впервые обращаемся к ней за организацией отдыха, и каждый раз остаёмся в полном восторге. Айман всегда очень внимательно относится к нашим пожеланиям, предлагает только проверенные и действительно стоящие варианты. С ней всегда надёжно и спокойно — она подскажет, посоветует и всё организует на высшем уровне.'},        
        {img:'/assets/img/testimonial/client-1.png', subtitle:'2ГИС', title:'Эльнура Р.', content:'Все понравилось! Спасибо, что забронировали без всяких условий, выручили, приятная обстановка, удобная локация👍'},        
        {img:'/assets/img/testimonial/client-2.png', subtitle:'2ГИС', title:'Айжан Ауесбаева', content:'Большое спасибо за прекрасный отдых! Тур был организован оперативно, очень быстро подготовили документы, отель нашли возле моря, менеджер (руководитель) Лаура всегда была с нами на связи. Мы остались очень довольны.'},        
        {img:'/assets/img/testimonial/client-3.png', subtitle:'2ГИС', title:'​Иван Охрименко', content:'Замечательная тур фирма. Ответственные сотрудники. Особая благодарность Айман за организацию нашего отдыха.'},        
        {img:'/assets/img/testimonial/client-3.png', subtitle:'2ГИС', title:'Альмира Тулеубекова', content:'Спасибо большое Sea Star Tourism Ltd, устроили моей семье незабываемый отдых, благодарю за оперативность и понимание менеджера Винеру, угодила всем, такой вредине как я 😅 🙌'},        
        {img:'/assets/img/testimonial/client-3.png', subtitle:'2ГИС', title:'Kamilya Kenzhegaliyeva', content:'Летаю через данное агентство с 2022 года, менеджер Бота самая лучшая. Всегда предлагает интересные варианты помогает со всеми документами и визами. Отличные цены по сравнению с другими агентствами и высокий сервис. Летала с ними в разные страны, успела посетить Италию, Швейцарию, Лихтенштейн и Бали'},        
      ]; 

    return (
        <section className="testimonial-section section-padding fix bg-cover">
{/*
            <div className="bag-shape float-bob-x">
              <Image src="/assets/img/testimonial/bag-shape.png" alt="img" width={181} height={288}   />
            </div>
*/}
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        Отзывы
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                        Что говорят наши клиенты
                    </h2>
                </div>
                <div className="testimonial-wrapper">
                    <div className="swiper testimonial-slider">
                        <div className="swiper-wrapper cs_slider_gap_301">
                        <Slider ref={sliderRef} {...settings}>
                        {testimonialContent.map((item, i) => (
                            <div key={i} className="swiper-slide">
                                <div className="testimonial-card-items">
                                    <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                    {item.content}
                                    </p>
                                    <div className="client-info-items">
                                        <div className="client-info">
                                            <div className="client-image">
                                              <Image src={item.img} alt="img" width={60} height={60}   />
                                            </div>
                                            <div className="text">
                                                <h4>{item.title}</h4>
                                                <p>{item.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45" viewBox="0 0 45 45" fill="none">
                                                <path d="M21.5998 15.1662C21.4359 21.2706 20.2326 27.1028 17.1618 32.4687C15.0391 36.1766 11.8636 38.7708 8.31789 40.9881C8.09312 41.1284 7.80413 41.3886 7.55907 41.1588C7.2836 40.9002 7.52189 40.5673 7.66216 40.3087C8.9449 37.9646 10.3121 35.6645 11.4292 33.2309C12.6528 30.564 13.6212 27.811 14.2567 24.9396C14.4257 24.1774 14.255 24.0929 13.535 24.2484C7.64188 25.526 2.16112 21.8976 1.00852 15.9858C-0.0849304 10.38 3.84608 4.78603 9.51275 3.88694C15.9196 2.86954 21.5491 7.65063 21.5998 14.1522C21.6015 14.4902 21.5998 14.8282 21.5998 15.1662Z" fill="#FFA31A"/>
                                                <path d="M44.25 15.2202C44.0793 21.5916 42.7949 27.6571 39.3912 33.1581C37.3175 36.5077 34.3228 38.8501 31.0746 40.9288C30.816 41.0945 30.4729 41.4375 30.1856 41.1198C29.9253 40.8325 30.2346 40.4877 30.3884 40.1987C31.6559 37.8462 33.0401 35.5562 34.1403 33.1142C35.3351 30.4642 36.2917 27.7382 36.9153 24.8939C37.0775 24.1536 36.8967 24.0827 36.2224 24.2415C30.2836 25.6358 24.4277 21.6338 23.5556 15.4348C22.7985 10.0537 26.7751 4.68115 32.1359 3.89022C38.7118 2.92353 44.2162 7.65053 44.25 14.2923C44.25 14.6016 44.25 14.9109 44.25 15.2202Z" fill="#FFA31A"/>
                                              </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </Slider>

                        </div>
                        <div className="array-button">
                            <button onClick={previous} className="array-prevs">Назад</button>
                            <button onClick={next} className="array-nexts">Вперёд</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial1;