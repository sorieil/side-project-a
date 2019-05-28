import lazyLoading from '@/router/menu/LazyLoading'

export default {
  path: '/',
  component: lazyLoading('IndexLayout'),
  meta: {
    type: 'all',
    login: true
  },
  children: [
    {
      path: '',
      component: lazyLoading('main/Slide'),
      meta: {
        title: 'Side project A에 오신것을 환영합니다.',
        type: 'all',
        login: false
      }
    },
    {
      path: 'login',
      component: lazyLoading('auth/Login'),
      meta: {
        title: 'Side project A - 로그인',
        type: 'all',
        login: false
      }
    },
    {
      path: 'signup',
      component: lazyLoading('auth/Signup'),
      meta: {
        title: 'Side project A - 회원가입 - 정보제공 동의',
        type: 'all',
        login: false
      }
    },
    {
      path: 'signup-type',
      component: lazyLoading('auth/SignupType'),
      meta: {
        title: 'Side project A - 회원가입 - 가입유형',
        type: 'all',
        login: false,
        reffer: '/signup'
      }
    },
    {
      path: 'signup-input',
      component: lazyLoading('auth/SignupInput'),
      meta: {
        title: 'Side project A - 회원가입 - 정보입력',
        type: 'all',
        login: false,
        reffer: '/signup-type'
      }
    },
    {
      path: 'signup-completed',
      component: lazyLoading('auth/SignupCompleted'),
      meta: {
        title: 'Side project A - 회원가입 -  회원가입 완료',
        type: 'all',
        login: false,
        reffer: '/signup-input'
      }
    },
    {
      path: 'about',
      component: lazyLoading('about/AboutLayout'),
      meta: {
        title: 'Side project A 소개',
        type: 'all',
        login: false
      },
      children: [
        {
          path: '',
          component: lazyLoading('about/Menu1'),
          meta: {
            title: 'Side project A 소개 - It`s Skin Side project',
            type: 'all',
            login: false
          }
        },
        {
          path: 'menu2',
          component: lazyLoading('about/Menu2'),
          meta: {
            title: 'Side project A 소개 - Why Side project',
            type: 'all',
            login: false
          }
        },
        {
          path: 'menu3',
          component: lazyLoading('about/Menu3'),
          meta: {
            title: 'Side project A 소개 - Process',
            type: 'all',
            login: false
          }
        }
      ]
    },
    {
      path: 'shop',
      component: lazyLoading('shop/ShopLayout'),
      meta: {
        title: '제품구매',
        type: 'all',
        login: false
      },
      children: [
        {
          path: '',
          component: lazyLoading('shop/Intro'),
          meta: {
            title: '제품구매',
            type: 'all',
            login: false
          }
        },
        {
          path: 'survey',
          component: lazyLoading('shop/Survey'),
          meta: {
            title: '제품구매 - 설문 시작',
            type: 'all',
            login: true
          }
        }
      ]
    },
    {
      path: 'review',
      component: lazyLoading('review/ReviewLayout'),
      meta: {
        title: '고객후기',
        type: 'all',
        login: false
      },
      children: [
        {
          path: '',
          component: lazyLoading('review/Lists'),
          meta: {
            title: '고객후기 - 리스트',
            type: 'all',
            login: false
          }
        },
        {
          path: 'write',
          component: lazyLoading('review/Write'),
          meta: {
            title: '고객후기 - 작성',
            type: 'all',
            login: true
          }
        },
        {
          path: 'view',
          component: lazyLoading('review/View'),
          meta: {
            title: '고객후기 - 보기',
            type: 'all',
            login: false
          }
        }
      ]
    },
    {
      path: 'customer',
      component: lazyLoading('customer/Customer'),
      meta: {
        title: '고객센터',
        type: 'all',
        login: false
      }
    },
    {
      path: 'faq',
      component: lazyLoading('customer/Faq'),
      meta: {
        title: '고객센터',
        type: 'all',
        login: false
      }
    }
  ]
}
