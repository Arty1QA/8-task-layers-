@run
Feature: Files are opened in Web Client

  Background: Login to Web Client
  Given login to Web Client
  When I enter user Name
  When I enter password
  When I logged in
  Then WC is opened


  Scenario: Open file in Web Client
    Given user clicks on "Search Icon"
    When user enter "File Name"
    When user clicks "Search Button"
    Then File is opened
  
   
    

