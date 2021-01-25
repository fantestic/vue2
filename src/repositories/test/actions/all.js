export default [
  {
    id: 'see',
    readable: 'I see $text',
    parameters: [
      { name: '$text', providers: [] }
    ]
  },
  {
    id: 'dontSee',
    readable: 'I dont see $text',
    parameters: [
      { name: '$text', providers: [] }
    ]
  },
  {
    id: 'amOnPage',
    readable: 'I am on page $page',
    parameters: [
      { name: '$page', providers: [] }
    ]
  },
  {
    id: 'fillField',
    readable: 'I fill field $field with value $value',
    parameters: [
      { name: '$field', providers: [] },
      { name: '$value', providers: [] }
    ]
  },
  {
    id: 'selectOption',
    readable: 'I select option $option from dropdown $select',
    parameters: [
      { name: '$select', providers: [] },
      { name: '$option', providers: [] }
    ]
  }
]