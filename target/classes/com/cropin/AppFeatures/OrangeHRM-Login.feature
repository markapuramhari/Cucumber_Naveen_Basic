Feature: OrangeHRM Login
  Description:.........OrangeHRM Login.................

  Background: background steps
    Given user launch chrome browser
    When user open OrangeHRM homepage
    Then user verify that the logo presence on homepage

#Check Logo presence
  @Sanity @Smoke @End2End
  Scenario: Check Logo presence on OrangeHRM homepage
  Description:.........#Check Logo presence...................
    And close browser


#Check valid Login
  @End2End
  Scenario Outline: Login to OrangeHRM with valid credentials
  Description:.........#Check valid Login..................
    And enter username "<username>" and password "<password>"
    And click login button
    Then user must successfully login to the Dashboard page
    And close browser

    Examples:
      | username | password |
      | Admin    | admin123 |



#Check Invalid Login
  @Smoke @Regression
  Scenario Outline: Login to OrangeHRM with Invalid credentials
  Description:.........#Check Invalid Login......................
    And enter username "<username>" and password "<password>"
    And click login button
    Then user must Invalid login page
    And close browser

    Examples:
      | username | password |
      | username | password |
      | admin    | Admin123 |
      | Admin123 | Admin    |
      | Admin    | admin    |
      |          | admin123 |
      |          |          |