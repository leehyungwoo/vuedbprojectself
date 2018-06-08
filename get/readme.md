# 스스로 mysql , express, vuejs 첫 프로젝트.

개인적으로 작업하면서 당황스러웠던 부분은 

nodejs,sql구문을 제대로 인지하지 못하는상태에서 오류가났을때 

nodejs부분의 mysql connection 부분이 잘못된것인지, 

서버에 등록되어있는 mysqlDB table 자체의 문제인지 **디버깅법을 몰라 어디가 잘못되었는지 알수가없었고**

 var sql = "INSERT INTO topic.userinf (id,password) VALUES ('" + idval + "','" + passval+"')" 

 **괄호와 따옴표 부분이 헷갈렸다.**