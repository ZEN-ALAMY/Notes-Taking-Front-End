function NoteItem(props) {
  return (
    <div className="flex xl:flex-row sm:flex-col flex-col bg-gray-300 xl:h-[70px] sm:h-[120px] h-120px my-[30px] xl:w-[95%] sm:w-[70%] w-[80%] mx-auto rounded-xl xl:items-center sm:justify-evenly justify-evenlyr">
      <div className="xl:w-[33.33%] ml-[5px]">
        TITLE:&nbsp;&nbsp;{props.title}
      </div>
      <div className="sm:text-center xl:w-[33.33%] xl:ml-0 sm:ml-0 ml-[5px]">
        DATE:&nbsp;&nbsp;{props.date}
      </div>
      <div className="sm:text-right xl:w-[33.33%] xl:ml-0 sm:ml-0 ml-[5px]">
        RELEVANCE:&nbsp;&nbsp;{props.relevance}
      </div>
    </div>
  );
}

export default NoteItem;
