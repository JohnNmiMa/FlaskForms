Feature: Confirming that the tip calculator form displays

    Scenario: check that the form displays
        When I go to the tip calculator
        Then I should see the calculator form

    Scenario: check that the form submits successfully
        When I go to the tip calculator
        And I submit the form with a valid total and tip percentage
        Then I should see the results page

    Scenario: check that the form computes correctly
        When I go to the tip calculator
        And I enter $50 for the meal
        And I enter a 20% tip
        Then I should see a $10 tip amount
