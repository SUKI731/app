<?php 
	require_once('connect.php');
	mysql_query("set names utf-8");
	$email=!empty($_POST["email"])?$_POST["email"]:null;
	$password=!empty($_POST["password"])?$_POST["password"]:null;
	$sql="select email from  user";
	$query=mysql_query($sql);
	if($query&&mysql_num_rows($query)){
		while($row=mysql_fetch_assoc($query)){
			$data[]=$row;
		}
		if($data[0]['email']==$email){
			echo "0";
		}
		echo "1";
		}	
	

 ?>