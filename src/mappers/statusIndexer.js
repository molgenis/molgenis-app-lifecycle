
const reducer = (acc, {variable, harmonizations}) =>
  harmonizations.reduce((acc, {cohort, status, id}) => {
    const cohortID = cohort.id
    const existing = acc[cohortID] || {}
    return {...acc, [cohortID]: {...existing, [variable]: { status: status.id, id }}}
  }, acc)

export default (selectedNodeVariables) => selectedNodeVariables.reduce(reducer, {})
