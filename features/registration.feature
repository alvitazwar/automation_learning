Feature: Registration Process
  In Product purchase I will confirm if all the calculation is working

@reg
  Scenario: Register a new user and verify
    Given I have a Register Form
    When I Register a new user as vendor and logged in
    Then I should check email as user email
