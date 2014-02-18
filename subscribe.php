<?php

/**
 * Form processing logic
 */
function process( $string ){
	$dbhost = 'localhost';
	$dbname = 'poseidon';
	$collection = 'subscriptions';

	$conn = new MongoClient("mongodb://$dbhost");
	$col = $conn->$dbname->$collection;

	$doc = array(
		'email' => $string,
		'timestamp' => new MongoDate()
	);

	try{
		$col->insert($doc);
	} catch(MongoCursorException $e) {
		echo "It's all good, we already have that email address in our database.";
		exit;
	}
	echo "Thanks, we will notify you soon with exciting news!";
}

if(!$_POST){
	echo "Hey man, you're supposed to be submitting a form!";
}else{
	process( $_POST['email'] );
}

