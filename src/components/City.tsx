import { cityMapping } from 'city-timezones';
import Fuse from 'fuse.js';
import { DateTime } from 'luxon';
import { useState } from 'react';

const options = {
  includeScore: true,
  includeMatches: true,
  ignoreLocation: true,
  threshold: 0,
  keys: ['city'],
};

const myIndex = Fuse.createIndex(options.keys, cityMapping);
const fuse = new Fuse(cityMapping, options, myIndex);

function City() {
  const [inputValue, setInputValue] = useState<string>('');

  function handleClick() {
    const res = fuse.search(inputValue);

    console.log(res);
    if (res.length > 0) {
      console.log(DateTime.now().setZone(res[0].item.timezone).toFormat('YYYY-MM-DD HH:mm:ss'));
    }
  }

  return (
    <div>
      city
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>search</button>
    </div>
  );
}

export { City };
