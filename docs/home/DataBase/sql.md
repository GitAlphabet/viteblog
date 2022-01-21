### SQL 语句

#### 基础 sql

```sql
# 显示所有数据库
SHOW DATABASES

# 显示所有数据表
SHOW TABLES

# 新建数据库
CREATE DATABASE database_name

# 新建表
CREATE TABLE table_name(列名1 数据类型,列名2 数据类型,列名3 数据类型)
```

#### 查询 SQL 语句

```sql
# 查看表结构语句
DESC table_name

# 查询所有列
SELECT * FROM table_name

# 查询指定列
SELECT field_name FROM table_name

# 从查询去除重后的的数据
SELECT DISTINCT field_name FROM table_name

# 查询指定行
SELECT * FROM table_name WHERE field_name = value

#  查询 field_name 大于 value 的所有字段
SELECT * from table_name WHERE field_name > value;

# 查询 field_name 不等于 value 的  字段
SELECT <field_name1,field_name2> FROM table_name WHERE field_name <> value
```

#### BETWEEN

```sql
# field_name 在 value1,value2 之间数据
SELECT * FROM table_name WHERE field_name  BETWEEN value1 and value2
```

#### 通配符

```sql
# 模糊查询: % 表示一个或多个字符，
SELECT * FROM table_name WHERE field_name LIKE "value%" # 匹配开始
SELECT * FROM table_name WHERE field_name LIKE "%value%" # 匹配包含
SELECT * FROM table_name WHERE field_name LIKE "%value" # 匹配结尾

# _ 代表一个字符
SELECT * FROM table_name WHERE field_name LIKE 'C_r_er'

# 使用逻辑操作符
SELECT  * FROM table_name WHERE (field_name = value OR field_name = value) AND field_name LIKE '%value%';

# 查询 field_name 以 "A" 或 "L" 或 "N" 开头
SELECT * FROM table_name WHERE field_name LIKE '[ALN]%'

# 查询 field_name **不以** "A" 或 "L" 或 "N" 开头
SELECT * FROM table_name WHERE field_name LIKE '[!ALN]%'
```

#### ORDER BY

```sql
# 将查询结果按字段的值进行排序 默认升序
SELECT  * FROM table_name ORDER BY field_name # 升序
SELECT  * FROM table_name ORDER BY field_name DESC # 降序
```

#### AND、OR

```sql
# AND 显示所有 field_name1 为 value1 并且 field_name2 为 value2 的数据
SELECT * FROM table_name WHERE field_name1= value1  AND  field_name2 = value2

# OR 显示所有 field_name1 为 value1 或者 field_name2 为 value2 的数据
SELECT * FROM table_name WHERE  field_name1 = value1  OR  field_name2 = value2

```

#### LIMIT、TOP

```sql
# 将查询结果按字段的值进行排序 默认升序
SELECT  * FROM table_name ORDER BY field_name # 升序
SELECT  * FROM table_name ORDER BY field_name DESC # 降序
```

#### IN

IN 操作符允许我们在 WHERE 子句中规定多个值。

```sql
SELECT * FROM table_name WHERE field_name IN (value1,value2)
```

#### COUNT、MAX、MIN、AVG、SUM

```sql
#查询数据的、最大说、最小数、平均值、和
SELECT MAX(field_name),MIN(field_name),AVG(field_name),SUM(field_name) FROM table_name

#查询数据表中某一字段值最大的数据
SELECT * FROM table_name WHERE field_name=(SELECT MAX(field_name) FROM table_name))

#查询数据表中的总条数
SELECT COUNT(*) FROM table_name

#查询数据表中某一字段值最大的数据
SELECT * FROM table_name WHERE field_name=(SELECT MAX(field_name) FROM table_name))
```

#### Alias（别名）

```sql
# 为列名称和表名称指定别名（Alias）
SELECT field_name as field_nameAliasName FROM table_name AS table_nameAliasName
```

#### JOIN

|    参数    |                           描述                           |
| :--------: | :------------------------------------------------------: |
|    JOIN    |             如果表中有至少一个匹配，则返回行             |
| INNER JOIN |            内连接,INNER JOIN 与 JOIN 是相同的            |
| LEFT JOIN  |         即使右表中没有匹配，也从左表返回所有的行         |
| RIGHT JOIN |         即使左表中没有匹配，也从右表返回所有的行         |
| FULL JOIN  | 只要其中一个表中存在匹配，就返回行。称为 FULL OUTER JOIN |

![avatar](../../images/sql/join.png)

```sql
# 为列名称和表名称指定别名（Alias）
SELECT l.name,l.age,l.hobbies,p.pos_name,p.level FROM stu_list as l, stu_pos as p WHERE l.id = p.pos_id

SELECT l.name, l.age, l.hobbies,p.pos_name,p.level
FROM stu_list as l LEFT JOIN stu_pos as p
on l.id = p.pos_id
```

#### UNION、UNION ALL

```sql
# UNION 操作符用于合并两个或多个 SELECT 语句的结果集。默认地，UNION 操作符选取不同的值
SELECT column_name(s) FROM table_name1
UNION
SELECT column_name(s) FROM table_name2

# UNION ALL 允许重复的值
SELECT column_name(s) FROM table_name1
UNION ALL
SELECT column_name(s) FROM table_name2
```







#### DELETE

```sql
# 删除
DELETE FROM table_name WHERE field_name = value

# 删除所有行
# DELETE FROM table_name;
# 或者
# DELETE * FROM table_name;
```

#### INSERT

```sql
# 插入新数据
INSERT INTO table_name VALUES (value1,value2,...);

# 对应字段名插入新数据
INSERT INTO table_name (field_name,field_name1,...) VALUES (value1,value2,...)
```

#### UPDATE

```sql
# 更新数据
UPDATE table_name set field_name1 = value1,field_name1=value2 WHERE field_name = value
```
