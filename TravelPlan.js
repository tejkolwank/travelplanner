import { useState } from 'react';

function TravelPlan() {
  const [plans, setPlans] = useState([]);
  const [plan, setPlan] = useState('');

  const handleChange = (e) => {
    setPlan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (plan) {
      setPlans([...plans, plan]);
      setPlan('');
    }
  };

  return (
    <div>
      <h1>My Travel Plans</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={plan}
          onChange={handleChange}
          placeholder="Enter a new travel plan"
        />
        <button type="submit">Add Plan</button>
      </form>
      <ul>
        {plans.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default TravelPlan;
