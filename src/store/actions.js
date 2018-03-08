import api from '@molgenis/molgenis-api-client'
import EntityToTreeMapper from '../util/EntityToTreeMapper'
import {
  SET_TREE_DATA,
  SET_ERROR
} from './mutations'

/* ACTION CONSTANTS */
export const GET_TREE_DATA = '__GET_TREE_DATA__'

/* API PATHS */
const TREE_API_PATH = '/api/v2/UI_Menu'

export default {
  [GET_TREE_DATA] ({state, commit}) {
    api.get(TREE_API_PATH).then(response => {
      const data = EntityToTreeMapper.generateTreeData(response, state.tree.settings)
      commit(SET_TREE_DATA, data)
    }, error => {
      commit(SET_ERROR, error)
    })
  }
}
