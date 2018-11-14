
<?php
define('ROOT', dirname(__FILE__)); //defining our File Path
include 'DB.php'; //Including Database file
class make_query
{
    public $ch;
    public $word;
    public $url;
    public $result;
    public $connect;

    public function send_query()//taking form text putting it in url and sending to full.am
    {
        $this->ch = curl_init();
        $this->word = $_POST['word'];
        $this->url = 'https://full.am/am/posting/search?keyword='.$this->word;
        curl_setopt($this->ch, CURLOPT_URL, $this->url);
        curl_setopt($this->ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, true);
        $this->result = curl_exec($this->ch);
        echo $this->result;
        echo "<script type='text/javascript'>consolge.log('a');</script>";
    }

    // public function __construct($connection_path)
    // {
    //     $connect = Database::getConnection();
    // }
}
if (isset($_POST['submit'])) {
    header('Location:'.'https://full.am/am/posting/search?keyword='.$_POST['word']);
    echo "<script type='text/javascript'>alert('a');</script>";
    $word = $_POST['word'];
    $connect = Database::getConnection(); // calling Database connection method
    $result = $connect->query('SELECT * FROM statistics'); //getting all info form statsitcs table
    $result->execute();
    $category_count_queries = 0;
    $product_count_queries = 0;
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {//and reading it for cheking some statments down below
        if ($row['category'] == $word) {
            ++$category_count_queries; //cheking if isset the same title just + 1 to it
        }
        if ($row['product'] == $word) {
            ++$product_count_queries; //the same with product cheking if isset the same title just + 1 to it
        }
    }
    if ($category_count_queries == 1) {
        $delete = $connect->query("DELETE FROM  categories WHERE title='".$word."'"); //prior delete
        $category = $connect->query("INSERT INTO categories (title,count_queries,  date)
        VALUES ('".$word."','1','".date('s/i/h/d/m/y')." ')"); //then again add to database
    }
    if ($category_count_queries > 1) {
        $delete = $connect->query("DELETE FROM  categories WHERE title='".$word."'"); //prior delete
        $category = $connect->query("INSERT INTO categories (title,count_queries,  date)
        VALUES ('".$word."','$category_count_queries','".date('s/i/h/d/m/y')." ')"); //then again add to database
    }
    if ($product_count_queries == 1) {
        $delete = $connect->query("DELETE FROM  products WHERE title='".$word."'"); //prior delete
        $product = $connect->query("INSERT INTO products(,title,count_queries,  date)
        VALUES ('".$word."','1','".date('s/i/h/d/m/y')." ')"); //then again add to database
    }
    if ($product_count_queries > 1) {
        $delete = $connect->query("DELETE FROM  products WHERE title='".$word."'"); //prior delete
        $product = $connect->query("INSERT INTO products(title,count_queries,  date)
        VALUES ('".$word."','$product_count_queries','".date('s/i/h/d/m/y')." ')"); //then again add to database
    }
    $submit_result = $connect->query("INSERT INTO statistics (category, product, date)
    VALUES ('".$word."','".$_POST['word']."','".date('s/i/h/d/m/y')." ')"); //making query | inserting it to statistics table

    $query = new make_query();
    $query->send_query();
}
