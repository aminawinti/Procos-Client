import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'ja',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          language: 'EN',
          infos: 'INFORMATIONS',
          outOfStock: 'Sorry. Product is out of stock!',
          hero: {
            header: 'ORIGINAL & OVERSEAS COSMETICS OEM',
            subheader: 'Join our beauty salons',
            button: 'Read more',
          },
          categories: {
            header: 'CATEGORIES',
            cat1: 'Facial Cleansing',
            cat2: 'Skin Lotion',
            cat3: 'Back Cream',
            cat4: 'Special Care',
            cat5: 'Makeup & Health',
          },
          products: {
            header: 'PRODUCTS',
          },
          cta: {
            line1: 'If you are looking for proposals for',
            line2: 'beauty and health',
            line3: 'please feel free to contact us.',
            button: 'Get in touch',
          },
          who: {
            header: 'WHO ARE WE',
          },
          section1: {
            header: 'Original Cosmetics',
            description:
              'We develop manufacture and sell our own cosmetics, we also carry out OEM/ODM production. We manufacture products for domestic and overseas use.',
          },
          section2: {
            header: 'Beauty, Health & Healing',
            description:
              'We make reasonably priced cosmetics and can experience the effects firmly, also we are enhancing salon store education and expanding the circle of salons.',
          },
          section3: {
            header: 'Company Profile',
            description:
              'This is the company profile of Procos Cosmetics.\nPlease have a look at the greetings from our representatives.',
          },
          more: {
            button: 'More details',
          },
          services: {
            service1: 'Internet of Things',
            service2: 'Software Development',
            service3: 'Artificial Intelligence',
          },
          navbar: {
            search: 'Search',
            about: 'About us',
            idea: 'CP Idea',
            contact: 'Contact us',
            services: 'Services',
            new: 'New',
          },
          footer: {
            company: 'COMPANY',
            privacy: 'Privacy Policy',
          },
          pages: {
            notFound: {
              helmet: 'CP Beauty | Not Found ',
              title: "We're sorry, this page cannot be found.",
              subTitle: 'Try searching the site:',
            },
            home: {
              helmet: 'CP Beauty | Makeup, Skincare, Hair & Beauty Products',
              addToCartButton: 'Add to cart',
              outOfStockButton: 'Out of stock',
              businessUse: 'Business use',
            },
            about: {
              helmet: 'CP Beauty | About',
              welcome: 'WELCOME',
              welcomeContent:
                'Our philosophy is that "all management begins with the customer, and management begins with the creation of a true specialty store."\nWith the aim of creating beautiful bare skin, through advanced counseling that guides you on the correct cosmetics, We sincerely and accurately respond to each customer`s skin, and recommend a beauty culture system (facial treatment) based on our unique external and internal beauty.\nWe are proud of our extensive new product development capabilities, as well as our high levels of quality, efficacy and safety.\nWe have a wide range of products, especially commercial products and serums.\nIn addition, we hold substantial training seminars under a consistent education system.',
              ceoName: 'Daisuke Sato',
              ceoPosition: 'CP Chief Executive Officer',
              companyProfile: 'COMPANY PROFILE',
              startDate: 'Established',
              startDateContent: 'April 10, 1995',
              mainActivity: 'Main Activity',
              mainActivityContent: 'Sale of cosmetics for esthetic salons',
              address: 'Address',
              addressContent:
                '〒562-0004 1-19-19 Makiochi, Minoh City, Osaka Prefecture MD HOUSE03 201',
              affiliates: 'Affiliates',
              affiliatesContent: {
                1: 'Procos Corporation',
                2: 'Samface Inc.',
                3: 'Sanemu Syoukai Inc.',
              },
              sales: 'Sales',
              salesContent: {
                1: 'Samsoin Cosmetics Okinawa Sales\t098-933-9961',
                2: 'Samsoin Cosmetics Kyushu Sales\t092-521-1220',
                3: 'Samsoin Cosmetics Nara Sales\t0745-73-0354',
                4: 'Samsoin Cosmetics China Sales\t0836-31-3333',
                5: 'Samsoin Cosmetics Kansai Sales\t06-6308-7773',
                6: 'Samsoin Cosmetics Taiwan Sales\t886-289-763-747',
              },
              tradingBanks: 'Trading Banks',
              tradingBanksContent: {
                1: 'Mitsui Sumitomo Bank . Minoh Branch Office',
                2: 'Mitsui Sumitomo Bank . Minami Senri Branch Office',
                3: 'The Kita Osaka Shinkin Bank Juso Branch . Osaka Branch Office',
              },
              corporateHistory: 'CORPORATE HISTORY',
              ts1: {
                date: 'Present',
                details: 'About 360 trading stores',
              },
              ts2: {
                details: 'Established Taiwan sales company in Taiwan',
              },
              ts3: {
                details: 'Opened a major trading store in South Korea',
              },
              ts4: {
                details: 'Established Kansai sales company in Osaka',
              },
              ts5: {
                detail1: 'Established Shikoku sales company in Kagawa',
                detail2: 'Established a Chinese sales company in Yamaguchi',
              },
              ts6: {
                details: 'Established Kyushu sales company in Fukuoka',
              },
              ts7: {
                date: 'April, 1995',
                detail1: 'Procos Company Formation',
                detail2: 'Started business with 25 stores in Okinawa',
              },
            },
            idea: {
              helmet: 'CP Beauty | Idea',
              thoughts: 'OUR CONCEPT',
              thoughtsContent:
                'Beauty and health as well as the customer`s contentment achieved by the great feel and results of the products are the most precious for Procos Cosmetics. We thoroughly train our staff, widen our reach, and provide the best results for customers and this brings a bright richness to their life and is how one can obtain happiness. That is Procos Cosmetics concept.',
              oem: {
                section1: {
                  header:
                    'In the pursuit of beauty,\nwe will make original cosmetics together with you.',
                  details:
                    'We, Procos Cosmetics, do not only manufacture and sell our own products, but also produce OEM products with specifications from customers. Every request is met with our full support, as we do everything we can to meet your specifications. If you are interested in our OEM productions, please contact us.',
                  button: 'Contact us',
                },
                section2: {
                  header: 'Requests we can meet.',
                  details:
                    '▪ I want to keep the already existing product, but change the design or container.\n▪ I want to make my own, completely original product.\n▪ I want to manufacture a product that appeals to both domestic and overseas customers.\n\n To answer the customer’s needs such as budget, batch size, and product launch plan, we offer flexible OEM production services. An especially common and popular request is making products that appeal overseas. If you are interested in making and selling products that appeal to overseas markets, there are some cautionary elements.',
                },
                section3: {
                  header: 'We pay attention to every detail',
                  details:
                    '▪ Please note that depending on the country, prohibited ingredients vary.\n▪ Elements such as colors and designswill be received differently according to region and country.\n▪ There must be a strong plan for product exposure as well as solid sales promotion.\n\n We make use of our technology, know-how, and experience of producing and selling cosmetics overseas, to meet each and every request from customers.\nWe have experience manufacturing for and promoting cosmetics in China, Korea, Taiwan, and New Zealand.\nFor those thinking about global product development, by all means please',
                  detailsLink: ' put your trust in Procos Cosmetics.',
                },
              },
              oemFlow: {
                header: 'Procos Cosmetics OEM Process',
                description:
                  'The OEM Process regarding Procos Cosmetics is as shown below.\nWhile there are basically no big differences between domestic and foreign products, we will holeheartedly support you with our know-how in relation to prohibited ingredients and promotion regarding the manufacturing of products for overseas consumers.',
                step1: {
                  header: '1 - Request and Consultation',
                  details:
                    'Please tell us your wishes and product image. We will embody the image after telling you your wishes such as sales route, price line, number of production lots...',
                },
                step2: {
                  header: '2- Sample Products',
                  details:
                    'After the meeting, we manufacture a sample considered as a tester. We remake it until you are satisfied, so please feel free to tell us.',
                },
                step3: {
                  header: '3 - Containers and Wrapping Material Consultation',
                  details:
                    'We discuss whether the container/packaging material will be prepared by our trading manufacturer or by the customer.',
                },
                step4: {
                  header: '4 - Price Estimation',
                  details:
                    'At the sample stage we will present a tentative price estimate.\nThe final quote will be presented once all final decisions have been made regarding the product.',
                },
                step5: {
                  header: '5 - Contract',
                  details:
                    'Once the final price has been agreed upon, we will enter a formal contract.',
                },
                step6: {
                  header: '6 - Delivery and Follow-up',
                  details:
                    'Once production has been finished, the ordered goods will be delivered to the customer.\nThen, we will continue to help with the promotion of the product, etc. as part of our follow-up service.',
                },
              },
            },
            contact: {
              helmet: 'CP Beauty | Contact',
              section1: {
                header: 'Contact us',
                sentence1: 'Please be sure to read the ',
                sentence1Link: 'Privacy Policy ',
                sentence1Remain:
                  'firstly. If you agree with the contents, please fill in the required items in the form below and click Send Email button.',
                sentence2:
                  'Note that depending on the content of your inquiry, your reply may be delayed.',
                fname: 'First name*',
                lname: 'Last name*',
                email: 'Email*',
                phone: 'Phone*',
                subject: 'Subject*',
                message: 'Message*',
                agree: 'Yes, I understand and agree to the Privacy Policy',
                button: 'Send Email',
                success: 'Email sent successfully.',
              },
              section2: {
                header: 'Get in touch',
                sentence:
                  'Please feel free to contact us if you have any questions about cosmetics, wish to participate in training/seminars, or have any questions about original cosmetics planning.',
              },
              section3: {
                header: 'Privacy policy',
                sentence1:
                  'When operating this site, we respect the privacy of our customers, give due consideration to personal information, carefully protect it, and strive to manage it appropriately.',
                sentence2: 'Purpose of using personal information:',
                sentence3:
                  'Various contacts to provide services that meet the needs of our customers.',
                sentence4: 'Contact us with answers to your inquiries.',
                bullet1:
                  'The acquired personal information will not be used for any purpose other than the purpose without the consent of the individual.',
                bullet2:
                  'We take measures to prevent information leakage and supervise not only employees but also contractors.',
                bullet3:
                  'We will not provide information to third parties without the consent of the individual.',
                bullet4:
                  'We will disclose information at the request of the person.',
                bullet5:
                  'If the disclosed personal information is not true, we will correct or delete it.',
                bullet6:
                  'We will respond appropriately and promptly to complaints regarding the handling of personal information.',
              },
            },
            services: {
              helmet: 'CP Beauty | Services',
              header: 'Discover Our Tech Services',
              card1Details:
                'Develop an efficient IoT solution for your enterprise',
              card2Details:
                'Create custom applications to grow your business online',
              card3Details: 'Automate your business with AI solutions',
              explore: 'Explore',
              section1: {
                header: 'IoT Service',
                part1: {
                  header: 'Embedded System Development',
                  title1: 'We Help You Build Your Embedded System',
                  details1:
                    'Our goal is to provide highly technical resources to help companies with their embedded system problems and design requirements.',
                  title2: 'Our Services',
                  details2:
                    'We have solid expertise in both hardware and software design. We have participated in projects involving FPGA/MCU/DSP development, RF Design, and Test & Measurement.',
                },
                part2: {
                  header: 'Wireless Technologies',
                  title1: 'Intelligent Solutions',
                  details1:
                    'We provide innovative solutions for businesses looking to create a complete software ecosystem for novel connected devices and sensors.',
                  title2: 'Our Services',
                  details2:
                    'We craft "proof of concepts" and prototypes of custom intelligent devices to help you verify your ideas before moving to the development phase. Moreover, we have expertise in communication technologies, e.g. LTE/4G, 5G solutions.',
                },
                part3: {
                  header: 'PCB Design',
                  title1: 'Design & Manufacturing',
                  details1:
                    'Our IoT development company will help you transform your idea into a functioning PCB system. We have expertise in schematic capture and PCB Layout.',
                  title2: 'Our Services',
                  details2:
                    'We provide a range of PCB Services. We have expertise in crafting efficient PCB that meets all your requirements and designs.',
                },
              },
              section2: {
                header: 'Dev Service',
                part1: {
                  header: 'Website Design & Development',
                  title1: 'Website Services Provider',
                  details1:
                    'Leverage advanced web development technologies, we bring front-end, back-end, and architecture together to meet your business needs.',
                  title2: 'Our Services',
                  details2:
                    'We design and create websites that help you grow your business. Whether it’s a complex enterprise platform and data storage, a responsive web app, or an e-commerce site, our solutions work smoothly and deliver the best user experience that reflects your business values.',
                },
                part2: {
                  header: 'Desktop Applications',
                  title1: 'Native & Cross-Platform Software',
                  details1:
                    'We help our customers use technologies to drive innovation and make a transition into digitally mature organizations. We design and develop high-quality enterprise software which meets your need.',
                  title2: 'Example: Client Management',
                  details2:
                    'The solution helps business owners to manage, organize, and track workplace activity, production, and performance. The solution contains digital contact management, reporting, and email tools.',
                },
                part3: {
                  header: 'Android & iOS Applications',
                  title1: 'Cross-Platform & Native Mobile Development',
                  details1:
                    'Our IoT development company will help you transform your idea into a functioning PCB system. We have expertise in schematic capture and PCB Layout.',
                  title2: 'Our Services',
                  details2:
                    'Our Mobile Dev team has extensive experience in developing iOS/Android solutions that bring a high-quality user experience for your users.',
                },
              },
              section3: {
                header: 'AI Service',
                part1: {
                  header: 'AI Consulting',
                  title1: 'AI For Business',
                  details1:
                    'We help you develop the optimal AI strategy that fits your need. Using your data, we develop AI-driven solutions that enable you to stay ahead of your competitors.',
                  title2: 'Our Services',
                  details2:
                    'We have expertise in several areas of AI such as anomaly detection, computer vision, recommendation systems, and predictions.',
                },
                part2: {
                  header: 'Data Analytics',
                  title1: 'Listen To Your Data',
                  details1:
                    'We help you gather, analyze, and understand your data. Using our insights, we guide you to improve your business and know your customers.',
                  title2: 'Our Services',
                  details2:
                    'With our tools, we help you increase business operational “hygiene” by scrubbing existing processes and systems for redundancies, conflicts, and value leaks. Moreover, we help you grow by understanding the key factors impacting your products and customers.',
                },
                part3: {
                  header: 'Automation',
                  title1: 'Intelligent Automation',
                  details1:
                    'Automation is a mixture of Robotics and artificial intelligence (AI) technologies. It empowers rapid end-to-end business process industrialization and accelerates digital transformation.',
                  title2: 'Our Services',
                  details2:
                    'We believe in automating everything, from infrastructure to operations. According to your need, we use proven machine learning approaches that boost efficiency, reduce costs, and accelerates the global process. Automation is crucial to scale your business and to stay ahead of your competitors.',
                },
              },
            },
            register: {
              helmet: 'CP Beauty | Register',
              header: 'Create Account',
              name: 'Name *',
              email: 'Email *',
              password: 'Password *',
              confirm: 'Confirm password *',
              button: 'register',
              underButton1: 'Already have an account?',
              underButton2: 'Log in',
              notMatch: 'Passwords do not match',
            },
            login: {
              helmet: 'CP Beauty | Login',
              header: 'Log in to your account',
              email: 'Email',
              password: 'Password',
              button: 'Login',
              underButton1: "Don't have an account yet?",
              underButton2: 'Register',
            },
            shipping: {
              helmet: 'CP Beauty | Shipping Address',
              header: 'Shipping Informations',
              fullname: 'Full Name *',
              address: 'Address *',
              city: 'City *',
              postalCode: 'Postal Code *',
              country: 'Country *',
              button: 'Continue',
            },
            checkout: {
              step1: 'Login',
              step2: 'Shipping',
              step3: 'Place Order',
            },
            ordersList: {
              helmet: 'CP Beauty | Orders',
              header: 'Orders',
              id: 'order id',
              user: 'user',
              date: 'date',
              status: 'status',
              action: 'action',
              detailsButton: 'details',
              deleteButton: 'delete',
              delivered: 'delivered',
              pending: 'pending',
              deletedUser: 'deleted user',
              noOrder: 'No order is received yet',
            },
            usersList: {
              helmet: 'CP Beauty | Users',
              header: 'Users',
              id: 'user id',
              name: 'name',
              email: 'email',
              status: 'status',
              admin: 'admin',
              user: 'user',
              action: 'action',
              editButton: 'edit',
              deleteButton: 'delete',
              noUser: 'No user has registered yet',
            },
            productsList: {
              helmet: 'CP Beauty | Products',
              header: 'Products',
              newProduct: 'New product',
              id: 'product id',
              name: 'name',
              category: 'category',
              volume: 'volume',
              status: 'status',
              inStock: 'in stock',
              outStock: 'out of stock',
              quantity: 'quantity',
              action: 'action',
              editButton: 'edit',
              deleteButton: 'delete',
              noProduct: 'No product has been entered yet',
            },
            editProduct: {
              helmet: 'CP Beauty | Edit Product',
              header: 'Edit product',
              name: 'name',
              slug: 'slug',
              imgFile: 'image file',
              category: 'category',
              volume: 'volume',
              businessUse: 'business use',
              countInStock: 'count in stock',
              Ingredients: 'Ingredients',
              details: 'details',
              usage: 'Usage',
              updateButton: 'update',
            },
            orderHistory: {
              helmet: 'CP Beauty | Order History',
              header: 'Order history',
              id: 'order id',
              date: 'date',
              status: 'status',
              delivered: 'delivered',
              pending: 'pending',
              action: 'action',
              detailsButton: 'Details',
              noOrder: 'No order has been completed yet.',
              continue: 'Continue shopping',
            },
            placeOrder: {
              helmet: 'CP Beauty | Preview Order',
              header: 'Preview Order',
              noOrder1: 'No more order to be placed.',
              noOrder2: 'Back to Shopping',
              contactInfos: 'Contact Informations:',
              edit: 'edit',
              name: 'Name:',
              email: 'Email:',
              address: 'Address:',
              details: 'Order Details:',
              prodImage: 'Image',
              prodName: 'Name',
              prodQuantity: 'Quantity',
              placeOrderButton: 'Place Order',
            },
            cart: {
              helmet: 'CP Beauty | My Basket',
              header: 'My Basket',
              noOrder: 'Your cart is currently empty.',
              maxItems: 'available items in stock:',
              continue: 'Continue shopping',
              imgNotFound: 'not found',
              remove: 'remove',
              checkoutButton: 'Proceed to Checkout',
            },
            order: {
              helmet: 'CP Beauty | Order Completed',
              order: 'Order',
              mainMessage: 'Order Completed Successfully!',
              mailNotify1: 'An order receipt has been sent ',
              mailNotify2: 'to',
              mailNotify3: 'Please keep it for your records.',
              continueButton: 'Continue Shopping',
              fulfillButton: 'Fulfill Order',
              delivered: 'delivered',
              pending: 'pending',
            },
            product: {
              helmet: 'CP Beauty | Product Page',
              available: 'AVAILABLE',
              outOfStock: 'OUT OF STOCK',
              volume: 'Volume:',
              details: 'Details',
              addToCartButton: 'ADD TO CART',
              ingredients: 'Ingredients',
              usage: 'Usage',
              reviewsHeader: 'Customer Reviews',
              reviewsSubheader: 'What our customers say about',
              noReview: 'No reviews for this product yet!',
              reviewsInputHeader: 'Write a customer review',
              reviewsInputSelect0: 'Select...',
              reviewsInputSelect1: '1- Poor',
              reviewsInputSelect2: '2- Fair',
              reviewsInputSelect3: '3- Good',
              reviewsInputSelect4: '4- Very good',
              reviewsInputSelect5: '5- Excelent',
              reviewsInputComment: 'Your review',
              reviewsInputSubmitButton: 'Submit review',
              reviewsInputLogin1: 'Please',
              reviewsInputLogin2: 'Log In',
              reviewsInputLogin3: 'to write a review',
              commentAndRating: 'Please enter comment and rating',
            },
            rating: {
              ratings: 'ratings',
              rating: 'rating',
            },
            search: {
              helmet: 'CP Beauty | Search Products',
              category: 'Category',
              allProducts: 'All Products',
              minRating: 'Minimum Rating',
              andUp: ' & up',
              resultsFound: 'results found for:',
              star: ' star & up',
              stars: ' stars & up',
              newArrivals: 'New Arrivals',
              customerRating: 'Customer Rating',
              noProduct: 'No Product Found',
            },
            dashboard: {
              helmet: 'CP Beauty | Dashboard',
              header1: 'Summary',
              header2: 'Categories',
              users: 'users',
              orders: 'orders',
              noCategory: 'No Category',
              loading: 'Loading...',
              admin: 'admins',
            },
          },
        },
      },
      ja: {
        translation: {
          language: 'JA',
          infos: '情報',
          outOfStock: 'ごめん。 商品は在庫切れです！',
          hero: {
            header: 'オリジナル＆海外化粧品OEM',
            subheader: 'ビューティーサロンにご参加ください',
            button: '続きを読む',
          },
          categories: {
            header: 'カテゴリ',
            cat1: 'フェイシャルクレンジング',
            cat2: 'スキンローション',
            cat3: 'バッククリーム',
            cat4: '特別なケア',
            cat5: 'メイクと健康',
          },
          products: {
            header: '製品',
          },
          cta: {
            line1: 'あなたがのための提案を探しているなら',
            line2: '美しさと健康',
            line3: 'お気軽にお問い合わせ下さい。',
            button: '連絡する',
          },
          who: {
            header: '私たちは誰ですか',
          },
          section1: {
            header: 'オリジナルコスメ',
            description:
              'サムソワン化粧品では、自社化粧品の開発・製造・販売だけでなく、お客様の声をカタチにするOEM・ODM生産も行っております。国内向けだけでなく、海外向け商品の製造にも対応可能です。',
          },
          section2: {
            header: '美容、健康、癒し',
            description:
              'リーズナブルな価格の化粧品を作り、その効果をしっかりと体験できるほか、サロンストアの教育を充実させ、サロンの輪を広げています。',
          },
          section3: {
            header: '会社概要',
            description:
              'これはプロコス化粧品の会社概要です。 担当者のご挨拶をご覧ください。',
          },
          more: {
            button: '詳細',
          },
          services: {
            service1: 'モノのインターネット',
            service2: 'ソフトウェア開発',
            service3: '人工知能',
          },
          navbar: {
            search: '探す',
            about: '約',
            idea: 'cpのアイデア',
            contact: 'コンタクト',
            services: 'サービス',
            new: '新着',
          },
          footer: {
            company: '会社',
            privacy: 'プライバシーポリシー',
          },
          pages: {
            notFound: {
              helmet: 'CPビューティー| 見つかりません',
              title: '申し訳ありませんが、このページが見つかりません。',
              subTitle: 'サイトを検索してみてください：',
            },
            home: {
              helmet:
                'CPビューティー| メイクアップ、スキンケア、ヘア＆ビューティー製品',
              addToCartButton: 'カートに追加',
              outOfStockButton: '在庫切れ',
              businessUse: '業務用',
            },
            about: {
              helmet: 'CPビューティー| 約',
              welcome: 'ようこそ',
              welcomeContent:
                '私共は“すべての経営はお客様から始まり、真の専門店づくりから経営が始まる”を理念とします。\n素肌美づくりを目的に、正しい化粧品をご指導する高度なカウンセリングにより、顧客一人一人のお肌に誠実、的確に対応し、独自の外面・内面美容を基本にしたビューティカルチャーシステム（美顔術）を推奨します。\n充実した新製品の開発力と、品質と有効性と安全性の高さを自負しております。\n豊富な商品構成を完備し、特に業務用商品と美容液の品揃えは大変充実しています。\n更に、一貫した教育体制のもと、充実した研修セミナーを開催しております。',
              ceoName: 'Daisuke Sato',
              ceoPosition: 'CPの最高経営責任者',
              companyProfile: '会社概要',
              startDate: '設立',
              startDateContent: '1995年4月10日',
              mainActivity: '事業内容',
              mainActivityContent: 'エステティックサロン専用化粧品の販売',
              address: '所在地',
              addressContent:
                '〒562-0004　大阪府箕面市牧落1-19-19　MD HOUSE03　201',
              affiliates: '主な関連会社',
              affiliatesContent: {
                1: '株式会社プロコス',
                2: '有限会社サムフェイス',
                3: '有限会社サンエム商会',
              },
              sales: '販売会社',
              salesContent: {
                1: 'サムソワン化粧品沖縄販社\t098-933-9961',
                2: 'サムソワン化粧品九州販社\t092-521-1220',
                3: 'サムソワン化粧品奈良販社\t0745-73-0354',
                4: 'サムソワン化粧品中国販社\t0836-31-3333',
                5: 'サムソワン化粧品関西販社\t06-6308-7773',
                6: 'サムソワン化粧品台湾販社\t886-289-763-747',
              },
              tradingBanks: '主要取引銀行',
              tradingBanksContent: {
                1: '三井住友銀行 . 箕面支店',
                2: '三井住友銀行 . 南千里支店',
                3: '十三信用金庫 . 新大阪支店',
              },
              corporateHistory: '会社沿革',
              ts1: {
                date: '現在',
                details: '取引店舗数約360店舗となる',
              },
              ts2: {
                details: '台湾にて台湾販社設立',
              },
              ts3: {
                details: '韓国にて主要取引店舗OPEN',
              },
              ts4: {
                details: '大阪にて関西販社設立',
              },
              ts5: {
                detail1: '香川にて四国販社設立',
                detail2: '山口にて中国販社設立',
              },
              ts6: {
                details: '福岡にて九州販社設立',
              },
              ts7: {
                date: '1995年4月',
                detail1: '会社設立',
                detail2: '沖縄地区で25店舗と取引スタート',
              },
            },
            idea: {
              helmet: 'CPビューティー| アイディア',
              thoughts: '私たちのコンセプト',
              thoughtsContent:
                'サムソワン化粧品が一番大切にしているのは、「お客様の美と健康」、そして心地よさと結果から生まれる「癒し」です。 そのために、サロン店教育を充実させ、サロンの輪を広げて、お客様に喜ばれる美しさと健康に対する提案につなげること。それは人生を明るく楽しく豊かにして幸せを手に入れることです。それがサムソワン化粧品の想いです。',
              oem: {
                section1: {
                  header:
                    '美を追求するオリジナル化粧品を、\nサムソワン化粧品と一緒に作りませんか？',
                  details:
                    'CPでは、自社で化粧品を製造・販売するだけでなく、お客様のご要望に応じてOEM生産を行っております。 お客様のご要望にお応えできるよう最善を尽くしますので、OEM生産をお探しの方はまずはお問い合わせください。',
                  button: 'お問い合わせ',
                },
                section2: {
                  header: 'ご要望にお応えします',
                  details:
                    '\n▪ 当社の既存商品と中身は同じで、デザインや容器だけを変更したい。\n▪ 完全自社オリジナル商品を製造したい。\n▪ 国内向けだけでなく、海外向けの商品も製造したい。\n\n当社では、お客様のご予算やロット数、商品展開方針に応じて、柔軟なOEM生産が可能です。\n特に多くのお客様からご好評いただいているのが、海外向け化粧品の製造です。\n海外向けに化粧品を製造・販売する場合、国内向け以上に注意すべき要素があります。',
                },
                section3: {
                  header: '細部にまで気を配っています',
                  details:
                    '\n▪ 国ごとの配合禁止成分を把握しておく必要があります。\n▪ 国民性の違いによって、受け入れられやすい色やデザインが異なります。\n▪ 販売プロモーションもしっかりと行い、周知徹底を図らなければいけません。\n\n当社では、海外向け化粧品の製造・販売に関する技術・ノウハウ・経験を活かし、お客様からのあらゆるご要望に的確にお応えすることが可能です。\n実際に中国や韓国、台湾、ニュージーランド向けの化粧品の製造・販売プロモーションを実施した経験もございます。\nグローバルな商品展開をお考えのお客様は、ぜひサムソワン化粧品にご依頼ください。',
                  detailsLink: '',
                },
              },
              oemFlow: {
                header: 'プロコス化粧品のOEMプロセス',
                description:
                  'サムソワン化粧品におけるOEMの流れは、下記の通りです。\n基本的に国内外に関わらず、大きな違いはありませんが、海外向け化粧品の製造に関しては、配合禁止成分の共有やプロモーションのご提案など、当社のノウハウを活かしたサポートを心がけております。',
                step1: {
                  header: '1-会議のリクエスト',
                  details:
                    'ご希望と商品イメージを教えてください。 販売ルート、価格ライン、生産ロット数など、ご希望をお伝えした上でイメージを具現化します。',
                },
                step2: {
                  header: '2-サンプル製造',
                  details:
                    '会議終了後、テスターとみなすサンプルを製作します。 ご満足いただけるまでリメイクいたしますので、お気軽にご連絡ください。',
                },
                step3: {
                  header: '3-コンテナと梱包材',
                  details:
                    'コンテナ/梱包材が当社の貿易メーカーによって準備されるのか、それとも顧客によって準備されるのかについて話し合います。',
                },
                step4: {
                  header: '4-見積もり',
                  details:
                    'サンプル段階で、まずは暫定のお見積りをご提示させていただきます。\n最終のお見積りに関しては、商品内容が確定した段階でのご提示となります。',
                },
                step5: {
                  header: '5-契約',
                  details:
                    'お見積り内容にご納得いただけましたら、正式にご契約となります。',
                },
                step6: {
                  header: '6-配達',
                  details:
                    '商品が完成いたしましたら、お客様先へと納品させていただきます。当社では、納品後も商品プロモーションなどのアフターフォローをさせていただきます。ご不明点などがございましたら、お気軽にご相談ください。',
                },
              },
            },
            contact: {
              helmet: 'CPビューティー| コンタクト',
              section1: {
                header: 'お問い合わせ',
                sentence1: 'お問い合わせフォームをご利用の際は、必ず「',
                sentence1Link: '個人情報保護方針',
                sentence1Remain:
                  '」をご一読ください。\nその内容に同意していただけましたら、下記フォームに必要事項をご入力の上、「入力内容確認画面へ」ボタンをクリックしてください。',
                sentence2:
                  'お問い合わせ内容によってはお返事が遅れる場合がございますので、あらかじめご了承ください。',
                fname: 'ファーストネーム*',
                lname: '苗字*',
                email: 'Eメール*',
                phone: '電話*',
                subject: '主題*',
                message: 'メッセージ*',
                agree: '当社規定の「個人情報保護方針」の内容に同意する。',
                button: 'メールを送る',
                success: '電子メールを正常に送信。',
              },
              section2: {
                header: '連絡する',
                sentence:
                  '化粧品に関するご質問、研修・セミナーへの参加希望、オリジナル化粧品企画に関するご質問などございましたら、お気軽にお問い合わせください。',
              },
              section3: {
                header: 'プライバシーポリシー',
                sentence1:
                  '当サイトの運営に際し、お客様のプライバシーを尊重し個人情報に対して十分な配慮を行うとともに、大切に保護し、適正な管理を行うことに努めております。',
                sentence2: '個人情報の利用目的：',
                sentence3:
                  'お客様のご要望に合わせたサービスをご提供するための各種ご連絡。',
                sentence4: 'お問い合わせいただいたご質問への回答のご連絡。',
                bullet1:
                  '取得した個人情報は、ご本人の同意なしに目的以外では利用しません。',
                bullet2:
                  '情報が漏洩しないよう対策を講じ、従業員だけでなく委託業者も監督します。',
                bullet3: 'ご本人の同意を得ずに第三者に情報を提供しません。',
                bullet4: 'ご本人からの求めに応じ情報を開示します。',
                bullet5:
                  '公開された個人情報が事実と異なる場合、訂正や削除に応じます。',
                bullet6:
                  '個人情報の取り扱いに関する苦情に対し、適切・迅速に対処します。',
              },
            },
            services: {
              helmet: 'CPビューティー| サービス',
              header: '私たちの技術サービスを発見する',
              card1Details:
                '企業向けの効率的なIoTソリューションを開発させていただきます',
              card2Details:
                'オンラインでビジネスを成長させるためのソフトウェア/ウェブサイトを作成いたします。',
              card3Details: 'AIでビジネスを自動化させていただきます',
              explore: '探検',
              section1: {
                header: 'IoT サービス',
                part1: {
                  header: '組み込みシステム開発',
                  title1: '組み込みシステムの構築を支援します',
                  details1:
                    '弊社の目標は、組み込みシステムの問題と設計要件について企業を支援するための高度な技術資源を提供することにあります。',
                  title2: '私たちのサービス',
                  details2:
                    '弊社にはハードウェアとソフトウェアの両方の設計に確かな専門知識があります。\n弊社はこれまでにFPGA / MCU / DSP開発、RF設計、およびテストと測定を含むプロジェクトに参加しました。',
                },
                part2: {
                  header: 'ワイヤレステクノロジー',
                  title1: 'インテリジェントソリューション',
                  details1:
                    '新しい接続デバイスとセンサー用の完全なソフトウェアエコシステムを作成しようとしている企業に革新的なソリューションを提供します。',
                  title2: '私たちのサービス',
                  details2:
                    '開発フェーズに進む前にアイデアを検証できるように、「概念実証」とカスタムインテリジェントデバイスのプロトタイプを作成します。 さらに、LTE / 4G、5Gソリューションなどの通信技術に関する専門知識もあります。',
                },
                part3: {
                  header: 'PCBデザイン',
                  title1: 'デザインと製造',
                  details1:
                    '弊社のIoT開発会社は、あなたのアイデアを機能するPCBシステムに変換するお手伝いをします。\n回路図キャプチャとPCBレイアウトの専門知識があります。',
                  title2: '私たちのサービス',
                  details2:
                    'さまざまなPCBサービスを提供しています。 弊社は、すべての要件と設計を満たす効率的なPCBの作成に関する専門知識を持っています。',
                },
              },
              section2: {
                header: 'dev サービス',
                part1: {
                  header: 'ウェブサイト',
                  title1: 'ウェブ開発',
                  details1:
                    '高度なWeb開発テクノロジーを活用して、フロントエンド、バックエンド、およびアーキテクチャを統合し、ビジネスニーズに対応します。',
                  title2: '私たちのサービス',
                  details2:
                    'ビジネスの成長に役立つウェブサイトを設計および作成します。\n複雑なエンタープライズプラットフォームとデータストレージ、レスポンシブWebアプリ、eコマースサイトのいずれであっても、当社のソリューションはスムーズに機能し、ビジネス価値を反映した最高のユーザーエクスペリエンスを提供します。',
                },
                part2: {
                  header: 'デスクトップアプリケーション',
                  title1: 'ネイティブおよびクロスプラットフォームソフトウェア',
                  details1:
                    'お客様がテクノロジーを使用してイノベーションを推進し、デジタル的に成熟した組織に移行するのを支援します。 お客様のニーズに合った高品質のエンタープライズソフトウェアを設計および開発します。',
                  title2: '例：クライアント管理',
                  details2:
                    'このソリューションは、ビジネスオーナーが職場の活動、生産、パフォーマンスを管理、整理、追跡するのに役立ちます。 このソリューションには、デジタル連絡先管理、レポート、および電子メールツールが含まれています。',
                },
                part3: {
                  header: 'AndroidおよびiOSアプリケーション',
                  title1: 'クロスプラットフォームとネイティブモバイル開発',
                  details1:
                    'モバイル開発の専門知識により、モバイルでユーザーとつながることができます。 シンプルなアプリでも大規模なソリューションでも、必要な時間で最高の結果を提供します。',
                  title2: '私たちのサービス',
                  details2:
                    'モバイル開発チームは、ユーザーに高品質のユーザーエクスペリエンスを提供するiOS / Androidソリューションの開発に豊富な経験を持っております。',
                },
              },
              section3: {
                header: 'AIサービス',
                part1: {
                  header: 'ＡＩ相談',
                  title1: 'ビジネス用 AI',
                  details1:
                    'ニーズに合った最適なAI戦略の開発を支援します。 お客様のデータを使用して、競合他社に先んじることができるAI主導のソリューションを開発します。',
                  title2: '私たちのサービス',
                  details2:
                    '異常検出、コンピュータービジョン、レコメンデーションシステム、予測など、AIのいくつかの分野で専門知識を持っています。',
                },
                part2: {
                  header: 'データ分析',
                  title1: '御社のデータに耳を傾けます',
                  details1:
                    'データの収集、分析、理解を支援します。\nインサイトを使用して、ビジネスを改善し、顧客を知るためのガイドを提供します。',
                  title2: '私たちのサービス',
                  details2:
                    '弊社のツールを使用すると、既存のプロセスとシステムをスクラブして冗長性、競合、価値の漏えいを防ぐことで、ビジネスの運用上の「衛生状態」を向上させることができます。\nさらに、製品や顧客に影響を与える主な要因を理解することで、成長を支援します。',
                },
                part3: {
                  header: 'オートメーション(自動化)',
                  title1: 'インテリジェントオートメーション',
                  details1:
                    '自動化は、ロボット工学と人工知能（AI）テクノロジーを組み合わせたものです。\n迅速なend-to-endのビジネスプロセスの工業化を促進し、デジタルトランスフォーメーションを加速します。',
                  title2: '私たちのサービス',
                  details2:
                    'インフラストラクチャから運用まで、すべてを自動化できる可能性があります。\n必要に応じて、効率を高め、コストを削減し、グローバルプロセスを加速する、実績のある機械学習アプローチを使用します。\n自動化は、ビジネスを拡大し、競合他社に先んじるために不可欠です。',
                },
              },
            },
            register: {
              helmet: 'CPビューティー| 登録',
              header: 'アカウントを作成する',
              name: '名前 *',
              email: 'Eメール *',
              password: 'パスワード *',
              confirm: 'パスワードを認証する *',
              button: '登録',
              underButton1: 'すでにアカウントをお持ちですか？',
              underButton2: 'ログイン',
              notMatch: 'パスワードが一致していません',
            },
            login: {
              helmet: 'CPビューティー| ログイン',
              header: 'あなたのアカウントにログイン',
              email: 'Eメール *',
              password: 'パスワード *',
              button: 'ログイン',
              underButton1: 'まだアカウントをお持ちではありませんか？',
              underButton2: '登録',
            },
            shipping: {
              helmet: 'CPビューティー| お届け先の住所',
              header: '配送情報',
              fullname: 'フルネーム *',
              address: '住所 *',
              city: '街 *',
              postalCode: '郵便番号 *',
              country: '国 *',
              button: '継続する',
            },
            checkout: {
              step1: 'ログイン',
              step2: '運送',
              step3: '注文する',
            },
            ordersList: {
              helmet: 'CPビューティー| 注文',
              header: '注文',
              id: '注文ID',
              user: 'ユーザー',
              date: '日にち',
              status: '状態',
              action: 'アクション',
              detailsButton: '詳細',
              deleteButton: '消去',
              delivered: '配信',
              pending: '保留中',
              deletedUser: '削除されたユーザー',
              noOrder: 'まだ注文は受け付けていません',
            },
            usersList: {
              helmet: 'CPビューティー| ユーザー',
              header: 'ユーザー',
              id: 'ユーザーID',
              name: '名前',
              email: 'Eメール',
              status: '状態',
              admin: '管理者',
              user: 'ユーザー',
              action: 'アクション',
              editButton: '編集',
              deleteButton: '消去',
              noUser: 'まだ登録しているユーザーはいません',
            },
            productsList: {
              helmet: 'CPビューティー| 製品',
              header: '製品',
              newProduct: '新製品',
              id: '製品番号',
              name: '名前',
              category: 'カテゴリー',
              volume: '音量',
              status: '状態',
              inStock: '在庫あり',
              outStock: '在庫切れ',
              quantity: '量',
              action: 'アクション',
              editButton: '編集',
              deleteButton: '消去',
              noProduct: '製品はまだ入力されていません',
            },
            editProduct: {
              helmet: 'CPビューティー| 製品の編集',
              header: '製品の編集',
              name: '名前',
              slug: 'ナメクジ',
              imgFile: '画像ファイル',
              category: 'カテゴリー',
              volume: '音量',
              businessUse: '業務用',
              countInStock: '在庫数',
              Ingredients: '材料',
              details: '詳細',
              usage: '利用方法',
              updateButton: 'アップデート',
            },
            orderHistory: {
              helmet: 'CPビューティー| 注文履歴',
              header: '注文履歴',
              id: '注文ID',
              date: '日にち',
              status: '状態',
              delivered: '配信',
              pending: '保留中',
              action: 'アクション',
              detailsButton: '詳細',
              noOrder: '注文はまだ完了していません。',
              continue: 'ショッピングを続ける',
            },
            placeOrder: {
              helmet: 'CPビューティー| プレビュー注文',
              header: 'プレビュー注文',
              noOrder1: 'これ以上の注文はありません。',
              noOrder2: 'ショッピングに戻る',
              contactInfos: '連絡先情報：',
              edit: '編集',
              name: '名前：',
              email: 'Eメール：',
              address: '住所：',
              details: '注文詳細：',
              prodImage: '画像',
              prodName: '名前',
              prodQuantity: '量',
              placeOrderButton: '注文する',
            },
            cart: {
              helmet: 'CPビューティー| 私のバスケット',
              header: '私のバスケット',
              noOrder: 'あなたのカートは現在空です。',
              maxItems: '在庫のあるアイテム：',
              continue: 'ショッピングを続ける',
              imgNotFound: '見つかりません',
              remove: '削除する',
              checkoutButton: 'チェックアウトに進む',
            },
            order: {
              helmet: 'CPビューティー| 注文完了',
              order: '注文',
              mainMessage: '注文が正常に完了しました。',
              mailNotify1: '注文領収書が送信されました',
              mailNotify2: 'に',
              mailNotify3: '記録のために保管してください。',
              continueButton: 'ショッピングを続ける',
              fulfillButton: '注文を履行する',
              delivered: '配信',
              pending: '保留中',
            },
            product: {
              helmet: 'CPビューティー| 製品ページ',
              available: '利用可能',
              outOfStock: '在庫切れ',
              volume: '音量：',
              details: '詳細',
              addToCartButton: 'カートに追加',
              ingredients: '材料',
              usage: '使用法',
              reviewsHeader: 'カスタマーレビュー',
              reviewsSubheader: 'お客様の声',
              noReview: 'この商品のレビューはまだありません！',
              reviewsInputHeader: 'カスタマーレビューを書く',
              reviewsInputSelect0: '選択する...',
              reviewsInputSelect1: '1-悪い',
              reviewsInputSelect2: '2-フェア',
              reviewsInputSelect3: '3-良い',
              reviewsInputSelect4: '4-とても良い',
              reviewsInputSelect5: '5-優秀',
              reviewsInputComment: 'あなたのレビュー',
              reviewsInputSubmitButton: 'レビュー送信',
              reviewsInputLogin1: 'お願いします',
              reviewsInputLogin2: 'ログインする',
              reviewsInputLogin3: 'レビューを書く',
              commentAndRating: 'コメントと評価を入力してください',
            },
            rating: {
              ratings: '評価',
              rating: '評価',
            },
            search: {
              helmet: 'CPビューティー| 製品の検索',
              category: 'カテゴリー',
              allProducts: 'すべての製品',
              minRating: '最小評価',
              andUp: '＆ 上',
              resultsFound: '見つかった結果：',
              star: 'スター＆アップ',
              stars: '星以上',
              newArrivals: '新着',
              customerRating: '顧客評価',
              noProduct: '製品が見つかりません',
            },
            dashboard: {
              helmet: 'CPビューティー| ダッシュボード',
              header1: '概要',
              header2: 'カテゴリ',
              users: 'ユーザー',
              orders: '注文',
              noCategory: 'カテゴリなし',
              loading: '読み込んでいます...',
              admin: '管理者',
            },
          },
        },
      },
    },
  });

export default i18n;
