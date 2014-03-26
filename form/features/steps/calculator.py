@when(u'I go to the tip calculator')
def step_impl(context):
    context.browser.get('http://localhost:5000')

@then(u'I should see the calculator form')
def step_impl(context):
    assert context.browser.title == "Tip calculator"

'''
Scenario: check that the form submits successfully
    When I go to the tip calculator
    And I submit the form with a valid total and tip percentage
    Then I should see the results page
'''

@when(u'I submit the form with a valid total and tip percentage')
def step_impl(context):
    br = context.browser
    br.get('http://localhost:5000')
    meal_cost = br.find_element_by_name("meal_cost")
    meal_cost.send_keys("30")
    tip_percentage = br.find_element_by_name("tip_percentage")
    tip_percentage.send_keys("20")
    br.find_element_by_id("submit").click()

@then(u'I should see the results page')
def step_impl(context):
    br = context.browser
    assert br.find_element_by_id('results')

'''
Scenario: check that the form computes correctly
    When I go to the tip calculator
    And I enter $50 for the meal
    And I enter a 20% tip
    Then I should see a $10 tip amount
'''
@when(u'I enter $50 for the meal and I enter a 20% tip')
def step_impl(context):
    br = context.browser
    br.get('http://localhost:5000')
    meal_cost = br.find_element_by_name("meal_cost")
    meal_cost.send_keys("50")
    tip_percentage = br.find_element_by_name("tip_percentage")
    tip_percentage.send_keys("20")
    br.find_element_by_id("submit").click()

@then(u'')
def step_impl(context):
    br = context.browser
