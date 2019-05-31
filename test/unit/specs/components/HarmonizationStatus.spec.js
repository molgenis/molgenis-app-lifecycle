import HarmonizationStatus from '@/components/HarmonizationStatus'
import { mount } from '@vue/test-utils'
import td from 'testdouble'

describe('components', () => {
  describe('HarmonizationStatus', () => {
    let wrapper
    let router
    let options

    const IconStub = {
      name: 'font-awesome-icon-stub',
      template: '<div />',
      props: [ 'icon' ]
    }

    beforeEach(() => {
      router = {
        push: td.function()
      }
      options = {
        propsData: {id: 'abcde', status: 'complete'},
        mocks: {
          $router: router,
          $route: {
            path: '/blah/blah'
          }
        },
        stubs: {
          'font-awesome-icon': IconStub
        }
      }
      wrapper = mount(HarmonizationStatus, options)
    })

    it('should open link to id when clicked', () => {
      wrapper.find('a').trigger('click')
      td.verify(router.push('/blah/blah/abcde'))
    })

    it('should not render link if id is missing', () => {
      wrapper.setProps({id: undefined})
      expect(wrapper.find('a').exists()).to.equal(false)
    })

    it('should render status Complete with proper icon and class', () => {
      const icon = wrapper.find(IconStub)
      expect(icon.props().icon).to.equal('check-circle')
      expect(icon.classes()).to.deep.equal(['text-success'])
    })

    it('should render status Partial with proper icon and class', () => {
      wrapper.setProps({status: 'partial'})
      const icon = wrapper.find(IconStub)
      expect(icon.props().icon).to.equal('check-circle')
      expect(icon.classes()).to.deep.equal(['text-warning'])
    })

    it('should render status N/A with proper icon and class', () => {
      wrapper.setProps({status: 'zna'})
      const icon = wrapper.find(IconStub)
      expect(icon.props().icon).to.equal('times')
      expect(icon.classes()).to.deep.equal(['text-secondary'])
    })

    it('should render missing status with proper icon and class', () => {
      wrapper.setProps({status: undefined})
      const icon = wrapper.find(IconStub)
      expect(icon.props().icon).to.equal('question')
      expect(icon.classes()).to.deep.equal(['text-secondary'])
    })
  })
})
