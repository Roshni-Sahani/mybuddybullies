import React from 'react'
const Footer = () => {
    return (
        <div>
            <footer class="footer-bg bg-blue2">
                <div class="container py-5">
                    <p class="ff-poppins fw-semibold fs-xl text-center lh-124 color-white py-5">JOIN US</p>
                    <div class="row pt-5">
                        <div class="col-lg-7 col-12 pt-5 ">
                            <p class="ff-poppins  fw-medium fs-2lg lh-124 color-white pt-5 cursor-pointer">LOGO</p>
                            <p class="ff-poppins fw-normal lh-150 color-white fs-xs op-6 max-w-334">Aenean arcu sed rhoncus sapien euismod cursus morbi lacus, blandit.
                                Placerat
                                tortor
                                duis fames cras pellentesque dui
                                adipiscing neque gravida. Sociis neque consectetur id quis pharetra.</p>
                        </div>
                        <div class="col-lg-5 col-12 pt-5">
                            <div class="row pt-5">

                                <div class=" col-6 pt-lg-247 pt-sm-0 pl-1">
                                    <p class="ff-poppins fw-medium lh-150 color-white fs-xs pt-5">Resources</p>
                                    <ul className='ps-0'>
                                        <li className='mt-1'><a href="" class="ff-poppins fw-normal fs-xxs lh-136 color-white links">Roadmap</a></li>
                                        <li className='mt-1'><a href="" class="ff-poppins fw-normal fs-xxs lh-136 color-white links">FAQs</a></li>
                                        <li className='mt-1'><a href="" class="ff-poppins fw-normal fs-xxs lh-136 color-white links">Mint your Bully</a></li>
                                    </ul>
                                </div>
                                <div class="col-6  pt-lg-247 pt-sm-0">
                                    <p class="ff-poppins fw-medium lh-150 color-white fs-xs pt-5">Community</p>
                                    <div class="d-flex gap-2">
                                        <span className='icon'>
                                            <a href="https://www.instagram.com/">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.77751 5.85189C7.16534 5.85189 5.84969 7.16754 5.84969 8.7797C5.84969 10.3919 7.16534 11.7075 8.77751 11.7075C10.3897 11.7075 11.7053 10.3919 11.7053 8.7797C11.7053 7.16754 10.3897 5.85189 8.77751 5.85189ZM17.5588 8.7797C17.5588 7.56729 17.5697 6.36585 17.5016 5.15563C17.4336 3.74993 17.1129 2.50236 16.085 1.47444C15.0548 0.444328 13.8095 0.125849 12.4038 0.0577599C11.1914 -0.0103288 9.98993 0.000653309 8.7797 0.000653309C7.56729 0.000653309 6.36585 -0.0103288 5.15563 0.0577599C3.74993 0.125849 2.50236 0.446524 1.47444 1.47444C0.444328 2.50456 0.125849 3.74993 0.0577599 5.15563C-0.0103288 6.36805 0.000653309 7.56948 0.000653309 8.7797C0.000653309 9.98993 -0.0103288 11.1936 0.0577599 12.4038C0.125849 13.8095 0.446525 15.057 1.47444 16.085C2.50456 17.1151 3.74993 17.4336 5.15563 17.5016C6.36805 17.5697 7.56948 17.5588 8.7797 17.5588C9.99212 17.5588 11.1936 17.5697 12.4038 17.5016C13.8095 17.4336 15.057 17.1129 16.085 16.085C17.1151 15.0548 17.4336 13.8095 17.5016 12.4038C17.5719 11.1936 17.5588 9.99212 17.5588 8.7797ZM8.77751 13.2845C6.28458 13.2845 4.27267 11.2726 4.27267 8.7797C4.27267 6.28678 6.28458 4.27487 8.77751 4.27487C11.2704 4.27487 13.2823 6.28678 13.2823 8.7797C13.2823 11.2726 11.2704 13.2845 8.77751 13.2845ZM13.4668 5.14245C12.8848 5.14245 12.4148 4.67242 12.4148 4.09037C12.4148 3.50832 12.8848 3.03829 13.4668 3.03829C14.0489 3.03829 14.5189 3.50832 14.5189 4.09037C14.5191 4.22858 14.492 4.36547 14.4392 4.49319C14.3864 4.62091 14.3089 4.73696 14.2112 4.83469C14.1134 4.93242 13.9974 5.00991 13.8697 5.06272C13.7419 5.11553 13.6051 5.14262 13.4668 5.14245Z"
                                                        fill="white" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className='icon'>
                                            <a href="https://twitter.com/">
                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M19.0652 2.10455C18.3781 2.40903 17.6399 2.61476 16.8639 2.70775C17.6646 2.22864 18.2637 1.47457 18.5493 0.586248C17.797 1.03309 16.9736 1.34761 16.115 1.51615C15.5377 0.899671 14.7729 0.491056 13.9395 0.35375C13.1061 0.216443 12.2507 0.358125 11.506 0.756801C10.7614 1.15548 10.1692 1.78884 9.82144 2.55856C9.47365 3.32827 9.38972 4.19128 9.58266 5.01359C8.05835 4.93705 6.56716 4.54086 5.20587 3.85072C3.84458 3.16057 2.64362 2.19191 1.68093 1.00759C1.35176 1.5754 1.16249 2.23375 1.16249 2.93488C1.16212 3.56606 1.31755 4.18757 1.61499 4.74427C1.91244 5.30097 2.34269 5.77565 2.86759 6.12618C2.25885 6.10681 1.66354 5.94233 1.13121 5.64642V5.69579C1.13115 6.58105 1.43737 7.43906 1.99791 8.12425C2.55844 8.80943 3.33877 9.27958 4.20649 9.45492C3.64178 9.60775 3.04973 9.63026 2.47505 9.52075C2.71987 10.2825 3.19675 10.9486 3.83894 11.4258C4.48113 11.903 5.25647 12.1674 6.05643 12.1821C4.69846 13.2481 3.02138 13.8264 1.29498 13.8238C0.989161 13.8239 0.683605 13.8061 0.379883 13.7703C2.13228 14.8971 4.17221 15.495 6.25557 15.4927C13.308 15.4927 17.1635 9.6516 17.1635 4.58567C17.1635 4.42108 17.1593 4.25485 17.1519 4.09027C17.9019 3.54794 18.5492 2.87636 19.0636 2.10701L19.0652 2.10455Z"
                                                        fill="white" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className='icon'>
                                            <a href="https://discord.com/">
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.2467 1.28672C14.1032 0.77102 12.8775 0.389848 11.5957 0.173103C11.5843 0.170912 11.5725 0.172324 11.5619 0.177145C11.5513 0.181965 11.5425 0.189956 11.5366 0.20001C11.3797 0.475798 11.2048 0.835296 11.0822 1.11931C9.72278 0.916191 8.34071 0.916191 6.98127 1.11931C6.84474 0.804548 6.69079 0.49764 6.52012 0.20001C6.51434 0.189832 6.50559 0.181661 6.49504 0.176586C6.48449 0.171512 6.47264 0.169775 6.46108 0.171609C5.18005 0.388353 3.95432 0.769525 2.81006 1.28597C2.80021 1.2901 2.79187 1.29715 2.78614 1.30615C0.460244 4.72549 -0.177284 8.06037 0.135875 11.3534C0.136746 11.3615 0.13925 11.3693 0.143233 11.3763C0.147216 11.3834 0.152596 11.3896 0.159044 11.3945C1.51661 12.3829 3.03079 13.1358 4.63818 13.6217C4.64939 13.6252 4.66137 13.6252 4.67257 13.6217C4.68377 13.6182 4.69367 13.6115 4.70096 13.6023C5.04626 13.1389 5.35419 12.6494 5.61727 12.1352C5.63297 12.1053 5.61802 12.0694 5.58663 12.0574C5.10381 11.8756 4.63601 11.6562 4.1875 11.4012C4.17945 11.3966 4.17265 11.3901 4.16774 11.3822C4.16283 11.3743 4.15995 11.3654 4.15935 11.3561C4.15876 11.3469 4.16048 11.3376 4.16435 11.3292C4.16822 11.3207 4.17412 11.3134 4.18153 11.3078C4.2757 11.2383 4.36987 11.1658 4.45956 11.0933C4.46763 11.0868 4.47735 11.0826 4.48765 11.0813C4.49794 11.08 4.5084 11.0815 4.51785 11.0858C7.45287 12.4042 10.6315 12.4042 13.5322 11.0858C13.5417 11.0813 13.5522 11.0795 13.5627 11.0807C13.5731 11.0819 13.583 11.086 13.5912 11.0925C13.6809 11.1658 13.7743 11.2383 13.8693 11.3078C13.8767 11.3133 13.8827 11.3205 13.8867 11.3289C13.8907 11.3372 13.8926 11.3465 13.8921 11.3557C13.8917 11.365 13.889 11.374 13.8842 11.3819C13.8794 11.3899 13.8727 11.3965 13.8648 11.4012C13.4178 11.6583 12.953 11.8758 12.4649 12.0567C12.4574 12.0594 12.4506 12.0637 12.4449 12.0693C12.4392 12.0748 12.4347 12.0816 12.4318 12.089C12.4289 12.0964 12.4276 12.1044 12.4281 12.1123C12.4285 12.1203 12.4306 12.1281 12.4343 12.1352C12.7033 12.6486 13.0113 13.1374 13.3498 13.6016C13.3569 13.6111 13.3667 13.6182 13.3779 13.6219C13.3891 13.6257 13.4013 13.6259 13.4126 13.6225C15.0228 13.1379 16.5394 12.3846 17.8985 11.3945C17.9051 11.3899 17.9107 11.3839 17.9148 11.3769C17.9189 11.3699 17.9215 11.3622 17.9224 11.3541C18.2961 7.5469 17.2961 4.23893 15.2699 1.30765C15.2649 1.29812 15.2567 1.2907 15.2467 1.28672ZM6.05599 9.34813C5.17257 9.34813 4.44386 8.54916 4.44386 7.56933C4.44386 6.58874 5.15837 5.79053 6.05599 5.79053C6.96034 5.79053 7.68232 6.59547 7.66812 7.56933C7.66812 8.54991 6.95361 9.34813 6.05599 9.34813ZM12.0165 9.34813C11.1323 9.34813 10.4043 8.54916 10.4043 7.56933C10.4043 6.58874 11.1181 5.79053 12.0165 5.79053C12.9208 5.79053 13.6428 6.59547 13.6286 7.56933C13.6286 8.54991 12.9216 9.34813 12.0165 9.34813Z"
                                                        fill="white" />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="ff-poppins fw-normal lh-150 color-white fs-xs  max-w-347 pb-3 mb-0 cursor-pointer">Email@gmail.com</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer