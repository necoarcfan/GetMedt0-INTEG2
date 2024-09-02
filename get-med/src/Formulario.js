import React, {useState} from 'react';

const Formulario = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');
	const [inputFecha, cambiarInputFecha] = useState('');
	const [inputHora, cambiarInputHora] = useState('');
	const [inputMensaje, cambiarInputMensaje] = useState('');

	// validar y enviar formulario
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Formulario Enviado!');
	}

	// cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	const handleInputFecha = (e) => {
        const selectedDate = new Date(e.target.value);
        const dayOfWeek = selectedDate.getDay(); // 0: Domingo, 1: Lunes, ..., 6: Sábado

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            alert('Por favor, selecciona un día de lunes a viernes.');
        } else {
            cambiarInputFecha(e.target.value);
        }
	}

	const handleInputHora = (e) => {
		cambiarInputHora(e.target.value);
	}

	const handleInputMensaje = (e) => {
		cambiarInputMensaje(e.target.value);
	}

	return (
		<>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>

				<div>
				    <label htmlFor="fecha">Fecha Deseada</label>
					<input
						type="date"
						name="fecha"
						id="fecha"
						value={inputFecha}
						onChange={handleInputFecha}
					/>
				</div>

				<div>
				    <label htmlFor="hora">Hora Deseada (9 am - 17:30 pm) </label>
					<input
						type="time"
						name="hora"
						step="1800"
						min="09:00"
						max="17:30"
						id="hora"
						value={inputHora}
						onChange={handleInputHora}
					/>
				</div>

				<div>
				    <label htmlFor="mensaje">Razón o motivo de la visita </label>
					<textarea
						type="text"
						name="mensaje"
						id="mensaje"
						className='input-grande'
						maxLength={500}
						value={inputMensaje}
						onChange={handleInputMensaje}
					/>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</>
	);
}
 
export default Formulario;