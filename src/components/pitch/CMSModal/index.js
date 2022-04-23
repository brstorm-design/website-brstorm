import React from 'react';
import styles from './CMSModal.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CMSModal() {
  return (
    <div className="modal fade" id="cms-modal" tabIndex="-1">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* <Swiper slidesPerView={'auto'} spaceBetween={24}>
              <SwiperSlide>
                <div className={styles.slide}>asdasd</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide}>asdasd</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide}>asdasd</div>
              </SwiperSlide>
            </Swiper> */}
            asdjasd
          </div>
        </div>
      </div>
    </div>
  )
}
