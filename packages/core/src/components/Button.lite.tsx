import { useStyle } from '@builder.io/mitosis';

export default function Button() {
  return <button class="button">Submit</button>;
}

useStyle(`
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
}

.button:hover {
  background-color: #2980b9;
}
`);
