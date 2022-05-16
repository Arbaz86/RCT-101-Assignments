import "./Ul.css";

export const Ul = () => {
  const data = [
    {
      heading: "Mobile Operating System",
      name: [
        {
          list: "Android",
        },
        {
          list: "BlackBerry",
        },
        {
          list: "iPhone",
        },
        {
          list: "Windows Phone",
        },
      ],
    },
    {
      heading: "Mobile Manufacturers",
      name: [
        {
          list: "Sumsang",
          style: "square",
        },
        {
          list: "HTC",
          style: "square",
        },
        {
          list: "Micromax",
        },
        {
          list: "Apple",
          style: "circle",
        },
      ],
    },
  ];

  return (
    <div className="main-div">
      {data.map((el) => (
        <>
          <h1>{el.heading}</h1>
          {el.name.map((e) => (
            <li className={e.style}>{e.list}</li>
          ))}
        </>
      ))}
    </div>
  );
};
