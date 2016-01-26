<?php
    class Cat{
	     public $name;
		 public $age;
		 public $color;
	}
	$cat1=new Cat();
	$cat1->name="小白";
	$cat1->age=4;
	$cat1->color="白色";
	$cat2=new Cat();
	$cat2->name="小画";
	$cat2->age=46;
	$cat2->color="黑色";
	$findname="小画";
	if($cat1->name==$findname){
	     echo $cat1->name."&&".$cat1->age."&&".$cat1->color;
	}
	if($cat2->name==$findname){
	     echo $cat2->name."&&".$cat2->age."&&".$cat2->color;
	}
	$a=$cat1;
	$a->age=5;
	echo "<br/>".$a->age."<br/>".$a->name;
	echo "<br/>".$cat1->age;
?>