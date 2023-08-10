"use client";

export const FooBar = () => {
  const handleFoo = () => {
    fetch("api/foo", { method: "POST" })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  const handleBar = () => {
    fetch("api/bar", { method: "POST" })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button
        type="button"
        className="bg-primary text-primary-foreground shadow hover:bg-primary/90 p-4"
        onClick={handleFoo}
      >
        Foo
      </button>

      <button
        type="button"
        className="bg-primary text-primary-foreground shadow hover:bg-primary/90 p-4"
        onClick={handleBar}
      >
        Bar
      </button>
    </>
  );
};
