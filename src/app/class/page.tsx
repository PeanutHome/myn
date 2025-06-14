'use client';
import Link from "next/link";
import styles from './class.module.css';
import { useState } from 'react';
import { Home, List, ShoppingBag, User } from "lucide-react";

export default function ClassPage() {
  const [showMore, setShowMore] = useState(false);

  const additionalOffers = [
    "15% Cashback on First Time ICICI Bank Credit Card Transaction on a min spend of ₹2,500. TCA",
    "Get up to ₹750 Cashback on Mobikwik Wallet on a min spend of ₹1,999. TCA",
    "5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA",
    "Get ₹100 off on first fashion purchase on a min spend of ₹999. TCA",
    "Extra 10% off on prepaid orders above ₹2,000. Use code PREPAID10",
    "Get flat ₹200 off on your first UPI transaction on orders above ₹999. Use code UPINEW",
    "Special Student Discount: Extra 15% off with valid student ID. Use code STUDENT15",
    "Free shipping on all orders above ₹1,499"
  ];

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Responsive Columns Wrapper */}
      <div className="container mx-auto px-3 py-4 flex flex-col md:flex-row gap-4">
        {/* Left Side */}
        <div className="w-full md:w-2/3 mb-4 md:mb-0 md:pr-4">
          {/* Delivery Address Strip */}
          <div className={styles['addressStripV2-base-desktopContainer']}>
            <div className={styles['addressStripV2-base-highlight']}>Check delivery time & services</div>
            <div className={styles['addressStripV2-base-changeBtn']}>ENTER PIN CODE</div>
          </div>

          {/* Offers */}
          <div className={styles['messageContainer-base-messageContainer']}>
            <div className={styles['offersV2-base-container']}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className={styles['offersV2-base-discountIcon']}>
                <g fill="#000" fillRule="evenodd">
                  <path d="M15.292 10.687v.001c-.198.742.076 1.454.296 2.026l.045.12-.137.021c-.602.094-1.352.211-1.892.75-.538.54-.655 1.288-.748 1.89l-.022.138a22.096 22.096 0 0 1-.12-.045c-.443-.171-.946-.364-1.49-.364-.185 0-.366.023-.536.068-.728.194-1.198.78-1.577 1.249-.032.04-.07.088-.111.137l-.112-.138c-.378-.47-.848-1.054-1.575-1.248a2.092 2.092 0 0 0-.537-.068c-.543 0-1.046.193-1.49.364l-.12.045-.022-.138c-.093-.602-.21-1.35-.749-1.89-.539-.539-1.289-.656-1.891-.75l-.137-.022a15 15 0 0 1 .045-.118c.22-.573.494-1.286.296-2.027-.194-.728-.78-1.199-1.25-1.577L1.323 9l.137-.11c.47-.38 1.055-.85 1.249-1.577.198-.742-.076-1.455-.296-2.028l-.045-.118.137-.022c.602-.094 1.352-.211 1.891-.75.54-.539.656-1.289.75-1.891l.022-.137.119.045c.443.171.947.365 1.49.365.186 0 .367-.024.537-.07.727-.193 1.198-.778 1.576-1.248L9 1.322l.111.137c.379.47.85 1.055 1.576 1.249.17.045.352.069.537.069.544 0 1.047-.194 1.491-.365l.119-.045.022.137c.094.602.21 1.353.75 1.891.538.539 1.288.656 1.89.75l.138.022-.046.119c-.22.572-.494 1.285-.295 2.026.194.728.778 1.199 1.248 1.577.04.033.088.07.137.111l-.137.11c-.47.38-1.054.85-1.249 1.577M18 9c0-.744-1.459-1.286-1.642-1.972-.19-.71.797-1.907.437-2.529-.364-.63-1.898-.372-2.41-.884-.511-.511-.253-2.045-.883-2.41a.647.647 0 0 0-.33-.08c-.585 0-1.403.542-1.998.542a.778.778 0 0 1-.201-.025C10.286 1.46 9.743 0 9 0c-.744 0-1.286 1.459-1.972 1.642a.78.78 0 0 1-.2.025c-.596 0-1.414-.542-2-.542a.647.647 0 0 0-.33.08c-.63.365-.37 1.898-.883 2.41-.512.512-2.046.254-2.41.884-.36.62.627 1.819.437 2.529C1.46 7.714 0 8.256 0 9s1.459 1.286 1.642 1.972c.19.71-.797 1.908-.437 2.53.364.63 1.898.371 2.41.883.511.512.253 2.045.884 2.41.097.056.208.08.33.08.585 0 1.403-.542 1.998-.542a.78.78 0 0 1 .201.025C7.714 16.54 8.256 18 9 18s1.286-1.46 1.973-1.642a.774.774 0 0 1 .2-.025c.595 0 1.413.542 1.998.542a.647.647 0 0 0 .33-.08c.631-.365.373-1.898.884-2.41.512-.512 2.046-.254 2.41-.884.36-.62-.627-1.819-.437-2.529C16.54 10.286 18 9.744 18 9"/>
                  <path d="M10.897 6.34l-4.553 4.562a.536.536 0 0 0 .76.758l4.552-4.562a.536.536 0 0 0-.76-.758M6.75 7.875a1.126 1.126 0 0 0 0-2.25 1.126 1.126 0 0 0 0 2.25M11.25 10.125a1.126 1.126 0 0 0 0 2.25 1.126 1.126 0 0 0 0-2.25"/>
                </g>
              </svg>
              <div>
                <div className={styles['offersV2-base-title']}>Available Offers</div>
                <ul>
                  <li className={styles['offersV2-base-message']}>
                    <span>10% Instant Discount on Axis Bank Credit Cards, Flipkart Axis Bank Credit Card & Axis Bank Credit Card EMI on a min spend of ₹3,500. TCA</span>
                  </li>
                  {showMore && additionalOffers.map((offer, index) => (
                    <li key={index} className={styles['offersV2-base-message']}>
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
                <div 
                  className={styles['offersV2-base-more']}
                  onClick={() => setShowMore(!showMore)}
                >
                  <span>{showMore ? 'Show Less' : 'Show More'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Items Placeholder */}
          <div id="cartItemsList">
            <div className={styles['bulkActionStrip-desktopContainer']}>
              <div className={styles['bulkActionStrip-selectionIcon']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles['bulkActionStrip-activeIcon']}>
                  <path fillRule="evenodd" d="M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0"/>
                </svg>
              </div>
              <div className={styles['bulkActionStrip-message']}>
                <span className={styles['bulkActionStrip-itemSelected']}>1/1 ITEMS SELECTED</span>
              </div>
              <div className={`${styles['inlinebuttonV2-base-actions']} ${styles['bulkActionStrip-desktopButton']}`}>
                <div className={`${styles['inlinebuttonV2-base-action']} ${styles['bulkActionStrip-desktopActionButton']}`}>
                  <button className={`${styles['inlinebuttonV2-base-actionButton']} ${styles['bulkActionStrip-desktopBulkRemove']}`}>REMOVE</button>
                </div>
                <div className={`${styles['inlinebuttonV2-base-action']} ${styles['bulkActionStrip-desktopActionButton']}`}>
                  <button className={`${styles['inlinebuttonV2-base-actionButton']} ${styles['bulkActionStrip-desktopBulkWishlist']}`}>MOVE TO WISHLIST</button>
                </div>
              </div>
            </div>
            <div className={styles['itemContainer-base-item']}>
              <div className={styles['itemContainer-base-itemLeft']}>
                <div className={`${styles['itemComponents-base-selectionIconContainer']} ${styles['itemContainer-base-selectionIndicator']}`}>
                  <div className={styles['itemComponents-base-animationContainer']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles['itemComponents-base-activeProduct']}>
                      <path fillRule="evenodd" d="M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0"/>
                    </svg>
                  </div>
                </div>
                <Link href="/Table-Lamps/Homesake/Homesake-White--Brown-Solid-Tripod-Table-Lamp-With-Jute-Shade/18118442/buy?mini=true&skuId=55764682&sellerPartnerId=5716&isMnowCalloutDisplayedInSrc=false" data-testid="itemImageComponent">
                  <div style={{ background: 'rgb(255, 237, 243)', height: '148px', width: '111px' }}>
                    <picture className={styles['image-base-imgResponsive']} style={{ width: '100%' }}>
                      <source srcSet="
                        https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18118442/2022/5/2/749f52f8-d0fd-4399-b8da-cd82f39214901651489698007TableLamps1.jpg ,
                        https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18118442/2022/5/2/749f52f8-d0fd-4399-b8da-cd82f39214901651489698007TableLamps1.jpg 1.5x,
                        https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18118442/2022/5/2/749f52f8-d0fd-4399-b8da-cd82f39214901651489698007TableLamps1.jpg 1.8x,
                        https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18118442/2022/5/2/749f52f8-d0fd-4399-b8da-cd82f39214901651489698007TableLamps1.jpg 2.0x" 
                        type="image/webp" 
                      />
                      <img 
                        src="https://assets.myntassets.com/w_111,h_148,dpr_1.25,q_60,c_limit,fl_progressive/h_148,q_60,w_111/v1/assets/images/18118442/2022/5/2/749f52f8-d0fd-4399-b8da-cd82f39214901651489698007TableLamps1.jpg"
                        className={styles['image-base-imgResponsive']}
                        alt="Table Lamp"
                        fetchPriority="high"
                        loading="eager"
                        style={{ height: '148px', width: '111px' }}
                      />
                    </picture>
                  </div>
                </Link>
              </div>
              <div className={styles['itemContainer-base-itemRight']}>
                <div className={styles['itemContainer-base-details']}>
                  <div>
                    <div className={styles['itemContainer-base-brand']}>Homesake</div>
                    <Link className={styles['itemContainer-base-itemLink']} href="/Table-Lamps/Homesake/Homesake-White--Brown-Solid-Tripod-Table-Lamp-With-Jute-Shade/18118442/buy?mini=true&skuId=55764682&sellerPartnerId=5716&isMnowCalloutDisplayedInSrc=false">
                      White & Brown Solid Tripod Table Lamp With Jute Shade
                    </Link>
                  </div>
                  <div className={styles['itemComponents-base-sellerContainer']}>
                    <div className={styles['itemComponents-base-sellerData']}>Sold by: INOVATION HANDART PRIVATE LIMITED</div>
                  </div>
                  <div className={styles['itemContainer-base-sizeAndQtyContainer']}>
                    <div className={styles['itemContainer-base-sizeAndQty']}>
                      <div className={styles['itemComponents-base-size']}>
                        <span>Size: Onesize</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" className={styles['itemComponents-base-dropDown']}>
                          <path fillRule="evenodd" d="M0 0h6L3 3z" />
                        </svg>
                      </div>
                      <div className={styles['itemComponents-base-quantity']}>
                        <span>Qty: 1</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" className={styles['itemComponents-base-dropDown']}>
                          <path fillRule="evenodd" d="M0 0h6L3 3z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={styles['itemContainer-base-price']}>
                    <div className={`${styles['itemComponents-base-price']} ${styles['itemComponents-base-bold']}`}>
                      <svg width="8" height="10" viewBox="0 0 8 10" className={styles['itemComponents-base-rupeeBoldIcon']}>
                        <path fillRule="nonzero" d="M3.418 10 .898 5.604V4.568h.84c.336 0 .63-.047.882-.14.262-.103.476-.247.644-.434.178-.187.299-.41.364-.672H.898V2.286h2.716a1.694 1.694 0 0 0-.294-.644 1.289 1.289 0 0 0-.532-.434 1.678 1.678 0 0 0-.784-.168H.898V.004h6.314V1.04H5.014c.159.177.29.369.392.574.112.205.187.43.224.672h1.582v1.036H5.658c-.093.69-.36 1.232-.798 1.624-.438.383-1.003.644-1.694.784L5.91 10H3.418Z" />
                      </svg>
                      923
                    </div>
                    <span className={styles['itemComponents-base-strikedAmount']}>
                      <svg width="7" height="9" viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg" className={styles['itemComponents-base-rupeeIcon']}>
                        <g clipPath="url(#clip0_674_1209)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.966797 4.6993L3.27973 8.73777H4.52798L2.19057 4.88287C2.6647 4.81768 3.06996 4.69005 3.40632 4.5H7V3.5H4.29767C4.37186 3.30767 4.42008 3.09555 4.44231 2.86364H6.03325V2.08042H4.41785C4.38521 1.79487 4.30771 1.54604 4.18531 1.33392C4.06295 1.12179 3.90795 0.938227 3.72028 0.783217H6.03325V0H0.966797V0.783217H1.23603C1.65211 0.783217 2.00293 0.82809 2.28848 0.917833C2.58218 1.00758 2.8147 1.15035 2.98603 1.34615C3.15736 1.5338 3.27158 1.77855 3.32868 2.08042H0.966797V2.86364H3.34091C3.3155 3.11784 3.24801 3.32996 3.13843 3.5H0V4.5H0.966797V4.6993Z" />
                        </g>
                      </svg>
                      4,400
                    </span>
                    <span className={styles['itemComponents-base-itemDiscount']}>
                      <svg width="7" height="9" className={styles['itemComponents-base-tradeRupeeIcon']}>
                        <g clipPath="url(#a)">
                          <path fillRule="nonzero" d="M.967 4.7 3.5 9h1.255L2.19 4.883c.652-.09 1.174-.298 1.566-.624.4-.335.628-.8.685-1.395h1.591V2.08H4.418a1.912 1.912 0 0 0-.233-.746 2.012 2.012 0 0 0-.465-.55h2.313V0H.967v.783h.269c.416 0 .767.045 1.052.135.294.09.527.232.698.428.171.188.286.433.343.734H.967v.784H3.34c-.033.326-.135.583-.306.77-.171.188-.408.323-.71.404a4.134 4.134 0 0 1-1.089.123h-.27v.538Z" />
                        </g>
                      </svg>
                      3,477 OFF
                    </span>
                  </div>
                  <div className={styles['itemComponents-base-returnInfoContainer']}>
                    <div className={styles['itemComponents-base-returnPolicyMessage']}>
                      <div className={styles['itemComponents-base-messageText']}>
                        <div>
                          <span className={styles['itemComponents-base-highlight']}>
                            <div>Exchange Only</div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles['itemContainer-base-closeIcon']}>
                  <path fill="#000" fillRule="evenodd" d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Login Nudge */}
          <div className={styles['loginNudge-base-mainContainer']}>
            <div className={styles['loginNudge-base-messageIcon']}></div>
            <div className={styles['loginNudge-base-messageContainer']}>
              <div className={styles['loginNudge-base-message']}>Login to see items from your existing bag and wishlist</div>
              <Link href="/login?referer=/checkout/cart" className={styles['loginNudge-base-loginCTA']}>LOGIN NOW</Link>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 md:pl-4">
          <div>
            {/* Coupons */}
            <div className={styles['coupons-base-header']}>Coupons</div>
            <div className={styles['coupons-base-content']}>
              {/* SVG icon omitted for brevity */}
              <div className={styles['coupons-base-label']}>Apply Coupons</div>
              <button className={styles['css-15k6cs5']}><div>APPLY</div></button>
              <div className={styles['coupons-base-couponMessage']}>
                <Link href="/login?referer=/checkout/cart" className={styles['coupons-base-logIn']}>Login</Link>
                <span> to get upto ₹500 OFF on first order</span>
              </div>
            </div>
            {/* Donation Strip */}
            <div className={styles['donationStrip-base-desktopHeader']}>Support transformative social work in India</div>
            <div className={styles['donationStrip-base-bodyContainer']}>
              <div className={styles['donationStrip-base-titleContainer']}>Donate and make a difference</div>
              <div className={styles['donationStrip-base-pillContainer']}>
                <div className={styles['pillView-base-pillsContainer']}>
                  <div className={styles['pillView-base-pill']}>₹10</div>
                  <div className={styles['pillView-base-pill']}>₹20</div>
                  <div className={styles['pillView-base-pill']}>₹50</div>
                  <div className={styles['pillView-base-pill']}>₹100</div>
                </div>
              </div>
              <div className={styles['donationStrip-base-desktopKnowMore']}>Know More</div>
            </div>
          </div>
          {/* Price Block */}
          <div className={styles['priceBlock-base-container']}>
            <div className={styles['priceBlock-base-priceHeader']}>PRICE DETAILS (1 Item)</div>
            <div className={styles['priceBreakUp-base-orderSummary']} id="priceBlock">
              <div className={styles['priceDetail-base-row']}><span>Total MRP</span><span className={styles['priceDetail-base-value']}>₹4,400</span></div>
              <div className={styles['priceDetail-base-row']}><span>Discount on MRP</span><span className={`${styles['priceDetail-base-value']} ${styles['priceDetail-base-discount']}`}>-₹3,477</span></div>
              <div className={styles['priceDetail-base-row']}><span>Coupon Discount</span><span className={styles['priceDetail-base-value']}>Apply Coupon</span></div>
              <div className={styles['priceDetail-base-row']}><span>Platform Fee<span className={styles['priceDetail-base-knowMore']}>Know More</span></span><span className={styles['priceDetail-base-value']}>₹20</span></div>
              <div className={styles['priceDetail-base-row']}>
                <span>Shipping Fee<div className={styles['priceDetail-base-infoTextContainer']}><button className={styles['css-1pl9bms']}>Know More</button></div></span>
                <span className={styles['priceDetail-base-value']}><span className={styles['priceDetail-base-discount']}>FREE</span></span>
              </div>
              <div className={styles['priceDetail-base-total']}><span>Total Amount</span><span className={styles['priceDetail-base-value']}>₹943</span></div>
            </div>
          </div>
          <div>
            <button className={styles['css-ibwr57']}>PLACE ORDER</button>
          </div>
        </div>
      </div>

      {/* Recommendations Section - Now Below Both Columns */}
      <div className="container mx-auto px-3 mt-6">
        <div className={styles['cartFiller-base-cartFillerHeading']}>You may also like:</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {['All', 'Day Cream', 'Body Cream and Lotion', 'Conditioner', 'Deodorant', 'Shampoo', 'Face Sunscreen', 'Serum and Gel', 'Night Cream'].map((pill, index) => (
            <div 
              key={pill}
              className={`${styles['pills-base-pill']} ${pill === 'Deodorant' ? styles['pills-base-activePill'] : styles['pills-base-normalPill']}`}
              id={`cart-filler-pill-${pill.replace(/ /g, '-')}`}
              data-key={pill}
            >
              <div className={styles['pills-base-textStyle']}>{pill}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {[
            {
              id: '9685347',
              image: 'https://assets.myntassets.com/q_95,w_172,c_limit,fl_progressive/assets/images/2025/JUNE/2/cqNzbIT0_9b69d537549246f1ba8316e68e41804a.jpg',
              brand: 'Nivea',
              description: 'Women Pearl and Beauty Deo',
              price: '189',
              originalPrice: '315',
              discount: '40% OFF',
              background: 'rgb(229, 241, 255)'
            },
            {
              id: '9685025',
              image: 'https://assets.myntassets.com/q_95,w_172,c_limit,fl_progressive/assets/images/2025/JUNE/2/tNENg1Hq_c93504dcc38b42468808a4dd3bb77c00.jpg',
              brand: 'Nivea',
              description: 'Women 48h Deodorant 150 ml',
              price: '156',
              originalPrice: '285',
              discount: '45% OFF',
              background: 'rgb(244, 255, 249)'
            },
            {
              id: '21399094',
              image: 'https://assets.myntassets.com/q_95,w_172,c_limit,fl_progressive/assets/images/21399094/2023/1/3/d629434b-27a6-4820-beb8-d6562d46881d1672744560500Deodorant1.jpg',
              brand: 'Wild stone',
              description: 'Men Bronze Body Perfume 120ml',
              price: '147',
              originalPrice: '250',
              discount: '41% OFF',
              background: 'rgb(244, 255, 249)'
            },
            {
              id: '21399095',
              image: 'https://assets.myntassets.com/q_95,w_172,c_limit,fl_progressive/assets/images/21399094/2023/1/3/d629434b-27a6-4820-beb8-d6562d46881d1672744560500Deodorant1.jpg',
              brand: 'Wild stone',
              description: 'Men Bronze Body Perfume 120ml',
              price: '147',
              originalPrice: '250',
              discount: '41% OFF',
              background: 'rgb(244, 255, 249)'
            },
            {
              id: '21399096',
              image: 'https://assets.myntassets.com/q_95,w_172,c_limit,fl_progressive/assets/images/21399094/2023/1/3/d629434b-27a6-4820-beb8-d6562d46881d1672744560500Deodorant1.jpg',
              brand: 'Wild stone',
              description: 'Men Bronze Body Perfume 120ml',
              price: '147',
              originalPrice: '250',
              discount: '41% OFF',
              background: 'rgb(244, 255, 249)'
            }
          ].map((product) => (
            <div key={product.id} className={styles['cartFillerProduct-base-productCard']}>
              <div className={styles['cartFillerProduct-base-imageWrapper']}>
                <img 
                  src={product.image}
                  alt={product.description}
                  loading="lazy"
                />
              </div>
              <div className={styles['cartFillerProduct-base-productInfo']}>
                <div className={styles['cartFillerProduct-base-brandName']}>{product.brand}</div>
                <div className={styles['cartFillerProduct-base-productDescription']}>{product.description}</div>
                <div className={styles['cartFillerProduct-base-priceInfo']}>
                  <span className={styles['cartFillerProduct-base-boldtext']}>
                    <svg width="7" height="9" className={styles['cartFillerProduct-base-rupeeIcon']}>
                      <path fillRule="nonzero" d="M.967 4.7 3.5 9h1.255L2.19 4.883c.652-.09 1.174-.298 1.566-.624.4-.335.628-.8.685-1.395h1.591V2.08H4.418a1.912 1.912 0 0 0-.233-.746 2.012 2.012 0 0 0-.465-.55h2.313V0H.967v.783h.269c.416 0 .767.045 1.052.135.294.09.527.232.698.428.171.188.286.433.343.734H.967v.784H3.34c-.033.326-.135.583-.306.77-.171.188-.408.323-.71.404a4.134 4.134 0 0 1-1.089.123h-.27v.538Z" />
                    </svg>
                    {product.price}
                  </span>
                  <span className={styles['cartFillerProduct-base-originalPrice']}>
                    <svg width="7" height="9" className={styles['cartFillerProduct-base-rupeeIcon']}>
                      <path fillRule="nonzero" d="M.967 4.7 3.5 9h1.255L2.19 4.883c.652-.09 1.174-.298 1.566-.624.4-.335.628-.8.685-1.395h1.591V2.08H4.418a1.912 1.912 0 0 0-.233-.746 2.012 2.012 0 0 0-.465-.55h2.313V0H.967v.783h.269c.416 0 .767.045 1.052.135.294.09.527.232.698.428.171.188.286.433.343.734H.967v.784H3.34c-.033.326-.135.583-.306.77-.171.188-.408.323-.71.404a4.134 4.134 0 0 1-1.089.123h-.27v.538Z" />
                    </svg>
                    {product.originalPrice}
                  </span>
                  <span className={styles['cartFillerProduct-base-discountLabel']}>({product.discount})</span>
                </div>
                <Link href="/class" className={styles['cartFillerProduct-base-button']}>Add To Bag</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 flex w-full justify-between items-center h-14 shadow-lg">
        <Link href="/" className="flex-1 min-w-0 flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 py-1">
          <Home size={22} />
          <span>Home</span>
        </Link>
        <Link href="/category" className="flex-1 min-w-0 flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 py-1">
          <List size={22} />
          <span>Category</span>
        </Link>
        <Link href="/cart" className="flex-1 min-w-0 flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 py-1">
          <ShoppingBag size={22} />
          <span>Cart</span>
        </Link>
        <Link href="/profile" className="flex-1 min-w-0 flex flex-col items-center justify-center text-xs text-gray-700 hover:text-pink-500 py-1">
          <User size={22} />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
}