<?php
header("Access-Control-Allow-Origin:*");
header('Content-type:text/htmlcharset=utf-8');
mysql_connect('localhost','root','root');
mysql_select_db('app');
mysql_query('set names utf-8');
  ?>