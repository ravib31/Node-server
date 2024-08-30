const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

//Database 
const connection = mysql.createConnection({
  host: 'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
  user: 'candidate',
  password: 'NoTeDeSt^C10.6?SxwY882}',
  database: 'conqtvms_dev',
  port: 3306
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

app.get('/api/getVendorUsers',(req,res)=>{
  const prId = req.query.prId;
  const custOrgId = req.query.custOrgId;
   if(!prId || !custOrgId ){
    return res.status(400).json({error:"prId and custOrgId are required"})
   }

   const query = `SELECT DISTINCT vu.UserName,vu.Name FROM PrLineItems pli INNER JOIN VendorUsers vu ON FIND_IN_SET(vu.VendorUserId,pli.suppliers)>0
   WHERE pli.prLineItemId = ? AND pli.custOrgId = ?
   AND vu.VendorOrganizationId IN (
   SELECT DISTINCT pli.suppliers FROM PrLineItems pli 
   WHERE pli.prLineItemId = ? AND pli.custOrgId = ?
   )
   AND vu.Role = 'Admin';
   `;
    connection.query(query,[prId,custOrgId,prId,custOrgId],(err,result)=>{
    if(err){
      console.error('Error executing the query:', err);
      return res.status(500).json({error:"Internal server error"})
    }
    res.json(result)
   })
})

app.use((req,res)=>{
  res.status(404).json({error:"Not found"})
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 