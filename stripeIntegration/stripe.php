<?php

/** ####################################################
 ** Process of the payment trough Stripe. 
 ** We read the config parameters from the proper config
 ** file and, using the oficial Stripe class, process
 ** the payment.
 ** For testing and in general please see the Config file.
 ** http://stripe.com
 ** https://stripe.com/docs
 **
 ** 1. We include and load the needed files.
 ** 2. Config file verification.
 ** 3. Fetch the user data from the request
 ** 4. Build the information needed to register the charge on Stripe.
 ** 5. Send and process the payment request to Stripe.
 ** 6. Return the payment information.
 **/

$response = array();

/*  1.  */
$config_dir = __DIR__ . DIRECTORY_SEPARATOR . "config" . DIRECTORY_SEPARATOR;

include $config_dir . "stripe" . DIRECTORY_SEPARATOR . "init.php";

$config_file_path = $config_dir."config.ini";

$config = parse_ini_file($config_file_path, TRUE);



/*  2.  */
$response = check_errors($config);

if ( !isset($response['error']) )
{
	/*  3.  */
	$token_id 	= $_REQUEST['tokenId'];
	$email 		= $_REQUEST['email'];
	$amount 	= $_REQUEST['amount'];
	$currency	= $config['stripe']['default_currency'];
	$description= isset($_REQUEST['description']) && $_REQUEST['description'] ? $_REQUEST['description'] : $config['stripe']['default_description'];
	
	/*  3.  */
	// Set your secret key: remember to set the config value to FALSE (to use the live secret key) when the site is in production
	if ( $config['stripe']['test'] )
	{
		\Stripe\Stripe::setApiKey( $config['stripe']['api_test'] );
	}
	else 
	{
		\Stripe\Stripe::setApiKey( $config['stripe']['api_production'] );
	}
	

	// Get the credit card details submitted by the form

	/*  4.  */
	// Create the charge on Stripe's servers - this will charge the user's card
	try
	{
		$charge = \Stripe\Charge::create(array(
			"amount" 		=> $amount, 		// amount in cents, again
			"currency" 		=> $currency,
			"source" 		=> $token_id,
			"description" 	=> $description,
			'receipt_email' => $email
		));
	}
	catch(\Stripe\Error\Card $e) {
		// The card has been declined
		$response['status'] = 0;
		$response['error'] = 5;
		$response['errorMsg'] = 'There was an error when processing the payment through Stripe';

		echo json_encode( $response );
	}
	
	$response['status'] = 1;
}

/*  5.  */
echo json_encode( $response );





/**
 * Function to check if the system have all the required values on the config file.
 * 
 * @param $config array Array with the config.ini parsed info
 *
 * @return array Return an empty array if there is no errors, or an array with 2 index, error and errorMsg, indicating
 *               the error code and msg respectively
 */
function check_errors( $config )
{
	$response = array();

	if ( !$config) {
		$response['error'] = -1;
		$response['errorMsg'] = "there was an error parsing the file";
	}
	else if ( !isset($config['stripe']['test']) ||
	     !isset($config['stripe']['api_test']) ||
	     !isset($config['stripe']['api_production']) ||
	     !isset($config['stripe']['default_currency']) ||
	     !isset($config['stripe']['default_description']) )
	{
		//First we check for the config file to be properly built.
		$response['error'] = 1;
		$response['errorMsg'] = "The config file isn&#39;t properly set. Please check it.";
	}
	else if ( $config['stripe']['test'] && !$config['stripe']['api_test'])
	{
		//If the system is in test mode the api_test is required, if no it wont work.
		$response['error'] = 2;
		$response['errorMsg'] = "The system is on Test mode but there isn&#39;t no test api value";
	}
	else if ( !$config['stripe']['test'] && !$config['stripe']['api_production'])
	{
		//If the system isn't in test mode the api_production is required, if no it wont work.
		$response['error'] = 3;
		$response['errorMsg'] = "The system is on Production mode but there isn&#39;t no production api value";
	}

	return $response;
}