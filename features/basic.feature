Feature: Registration Process
  In Product purchase I will confirm if all the calculation is working


  Scenario: Register a new user and verify
    Given I have a Register Form
    When I Register a new user as vendor and logged in
    Then I should check email as user email

  @product
  Scenario: Product amount check
    Given I have product with $200 price in my cart
    When I go to checkout process
    Then my order amount is $200 and it is final amount

  @purchase_calculation
  Scenario: Purchase calculation 
    Given Existing balance of Vendor and Admin will be checked
    When Customer purchase a simple product
    Then Admin balance and commission will be checked 
    And Vendor approve order status to comeplete
    And Vendor balance will update with addition of new order earning amount


