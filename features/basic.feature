Feature: Registration Process
  In order to achieve my goals
  As New User
  I want to add new User

  Scenario: Register a new user and verify
    Given I have a Register Form
    When I Register a new user as vendor and logged in
    Then I should check email as user email

