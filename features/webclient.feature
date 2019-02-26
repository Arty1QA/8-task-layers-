@run
Feature: Files are opened in Web Client

  Scenario: Open file in Web Client
    Given user clicks on "Search Icon"
    When user enter "File Name"
    When user clicks "Search Button"
    Then File is opened
  
   
    

