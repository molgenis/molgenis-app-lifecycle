export default [
  {
    variable: 'var0',
    harmonizations: [{
      id: 'harm1',
      cohort: { id: 'COHORT1' },
      status: { id: 'zna' }
    }, {
      id: 'harm2',
      cohort: { id: 'COHORT2' },
      status: { id: 'complete' }
    }]
  }, {
    variable: 'var1',
    harmonizations: [{
      id: 'harm3',
      cohort: { id: 'COHORT1' },
      status: { id: 'partial' }
    }, {
      id: 'harm4',
      cohort: { id: 'COHORT3' },
      status: { id: 'complete' }
    }]
  }, {
    variable: 'var2',
    harmonizations: []
  }
]
