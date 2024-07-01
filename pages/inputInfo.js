import React, { useState }  from 'react';
import styles from '../styles/inputInfo.module.css';
import {PieChart, Pie, Cell, Tooltip, Legend,  ResponsiveContainer} from 'recharts';


const inputInfo = () => {

  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');


  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Amount:', amount);
    console.log('asset:', assetList);

  };


  const [assetList, setAssetList] = useState([{ asset: "" ,assetpercent: ""}]);

  const handleAssetChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...assetList];
    if (name=="assetpercent"){
      list[index][name] = Number(value);
    }
    else{
      list[index][name] = value;
    }
    setAssetList(list);
  };

  const handleAssetRemove = (index) => {
    const list = [...assetList];
    list.splice(index, 1);
    setAssetList(list);
  };

  const handleAssetAdd = () => {
    setAssetList([...assetList, { asset: "", assetpercent: "" }]);
  };

  return (

      <>

      <form onSubmit={handleSubmit}>
      <div>
        <label className={styles.formfield}>Initial Amount:$</label>
        <input placeholder="Enter Amount" className={styles.formfieldinputs} type="number" value={amount} onChange={handleAmountChange} />
      </div>

      <div>
        <label className={styles.formfield}>Start Date:</label>
        <input type="date" className={styles.formfieldinputs} value={date} onChange={handleDateChange} />
      </div>

      <div className={styles.formfield}>
        <label htmlFor="asset">Asset(s)</label>
        {assetList.map((singleAsset, index) => (
          <div key={index} className={styles.assets}>
            <div className={styles.firstdivision}>
              <label> Asset {index+1} </label>
              <input
                name="asset"
                className={styles.formfieldinputs}
                type="text"
                id="asset"
                placeholder="Ex. TSLA"
                value={singleAsset.asset}
                onChange={(e) => handleAssetChange(e, index)}
                required
              />
              <input
                name="assetpercent"
                className={styles.formfieldinputs}
                type="number"
                id="assetpercent"
                value={singleAsset.assetpercent.numeral}
                onChange={(e) => handleAssetChange(e, index)}
                required
              />%
              {assetList.length - 1 === index && assetList.length < 100 && (
                <button
                  type="button"
                  onClick={handleAssetAdd}
                  className={styles.addbtn}
                >
                  <span>Add an Asset</span>
                </button>
              )}
            </div>
            <div className={styles.seconddivision}>
              {assetList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleAssetRemove(index)}
                  className={styles.removebtn}
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className={styles.buttons} type="submit">Submit</button>
    </form>

    <ResponsiveContainer width="100%" aspect={4}>
      <PieChart width={270} height={200}>
        <Pie data={assetList} dataKey="assetpercent" color="#000000" nameKey="asset" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label={assetList}>
        {assetList.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>

    </>

  );
};

export default inputInfo;