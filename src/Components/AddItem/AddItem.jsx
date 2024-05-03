function AddItem({ items, setItems }) {
  function agregar(event) {
    event.preventDefault();
    const nombreTarea = document.getElementById("task").value;
    const tarea = { nombre: nombreTarea, estado: false };
    const newArray = items? [...items, tarea] : [tarea];
    setItems(newArray);
  }

  return (
<div>

    <form id="form" className="form-inline" onSubmit={agregar}>
      <div className="row align-items-start">
        <div className="col">
          <input type="text" id="task" placeholder='Agregar una tarea..' className="form-control" />
        </div>
        <div className="col-auto"> {/* Esta columna ocupa el ancho mínimo necesario */}
          <input type="submit" value="Agregar" className="btn btn-primary" name="Agregar tarea" />
        </div>
      </div>
    </form>
</div>
  );
}

export default AddItem;