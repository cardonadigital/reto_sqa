Feature: JQuery Datepicker

  Scenario: Reserve an appointment selecting a date in the calendar
    Given I open the JQuery Datepicker page
    When I go to the datepicker section
    And I open the datepicker input
    And I select the date 15
    Then the input should show "10/15/2025"

  Scenario: Select a specific date in a different month
    Given I open the JQuery Datepicker page
    When I go to the datepicker section
    And I open the datepicker input
    And I navigate to the next month
    And I select the date 10
    Then the input should show "11/10/2025"

  Scenario: Validate blocked manual input
    Given I open the JQuery Datepicker page
    When I go to the datepicker section
    And I type the following: "12/12/12"
    Then the datepicker input should not allow manual typing
