import { useState } from 'react'
import { RadioButton } from 'primereact/radiobutton';
import Course from './models/Course'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


function Test() {
    const [p1, setP1] = useState();
    const [p2, setP2] = useState();
    const [p3, setP3] = useState();
    const [p5, setP5] = useState();
    const [p4, setP4] = useState();
    const [p6, setP6] = useState();
    const [p7, setP7] = useState();
    const [p8, setP8] = useState();
    const [p9, setP9] = useState();
    const [p10, setP10] = useState();
    const [p11, setP11] = useState();
    const [p12, setP12] = useState();
    const [p13, setP13] = useState();
    const [p14, setP14] = useState();
    const [p15, setP15] = useState();
    const [p16, setP16] = useState();
    const [p17, setP17] = useState();
    const [p18, setP18] = useState();
    const [p19, setP19] = useState();
    const [p20, setP20] = useState();
    const [p21, setP21] = useState();
    const [p22, setP22] = useState();
    const [p23, setP23] = useState();
    const [p24, setP24] = useState();
    const [p25, setP25] = useState();
    const [p26, setP26] = useState();
    const [p27, setP27] = useState();
    const [p28, setP28] = useState();
    const [p29, setP29] = useState();
    const [p30, setP30] = useState();
    const [nameCourse1, setNameCourse1] = useState('');
    const [nameCourse2, setNameCourse2] = useState('');
    const [nameCourse3, setNameCourse3] = useState('');
    const [quantityCourse1, setQuantityCourse1] = useState(0);
    const [quantityCourse2, setQuantityCourse2] = useState(0);
    const [quantityCourse3, setQuantityCourse3] = useState(0);

    let course1 = new Course("Arquitectura", 0, 0.0);
    let course2 = new Course("Diseño gráfico", 0, 0.0);
    let course3 = new Course("Ingeniería Geomática", 0, 0.0);
    let course4 = new Course("Ingeniería Civil", 0, 0.0);
    let course5 = new Course("Ingeniería en Sistemas y Computación", 0, 0.0);
    let course6 = new Course("Matemática  ", 0, 0.0);
    let course7 = new Course("Enfermería", 0, 0.0);
    let course8 = new Course("Medicina", 0, 0.0);
    let course9 = new Course("Odontología", 0, 0.0);
    let course10 = new Course("Psicología", 0, 0.0);
    let course11 = new Course("Administración de Empresas", 0, 0.0);
    let course12 = new Course("Administración de Empresas Turísticas y Hoteleras", 0, 0.0);
    let course13 = new Course("Contabilidad", 0, 0.0);
    let course14 = new Course("Mercadeo", 0, 0.0);
    let course15 = new Course("Publicidad", 0, 0.0);
    let course16 = new Course("Derecho", 0, 0.0);
    let course17 = new Course("Política", 0, 0.0);


    const submit = () => {
        if (p1) {
            course1.pointsQuantity += 50;
            course2.pointsQuantity += 50;
        }
        if (p2) {
            course10.pointsQuantity += 50;
            course14.pointsQuantity += 50;
        }
        if (p3) {
            course4.pointsQuantity += 50;
            course3.pointsQuantity += 50;
        }
        if (p4) {
            course5.pointsQuantity += 30;
            course4.pointsQuantity += 30;
            course3.pointsQuantity += 30;
            course8.pointsQuantity += 10;
        }
        if (p5) {
            course17.pointsQuantity += 50;
            course15.pointsQuantity += 30;
            course14.pointsQuantity += 20;
        }
        if (p6) {
            course4.pointsQuantity += 20;
            course5.pointsQuantity += 20;
            course9.pointsQuantity += 20;
            course11.pointsQuantity += 20;
            course10.pointsQuantity += 20;
        }
        if (p7) {
            course5.pointsQuantity += 20;
            course11.pointsQuantity += 20;
            course12.pointsQuantity += 20;
            course2.pointsQuantity += 40;
        }
        if (p8) {
            course10.pointsQuantity += 60;
            course7.pointsQuantity += 40;
        }
        if (p9) {
            course1.pointsQuantity += 20;
            course2.pointsQuantity += 20;
            course13.pointsQuantity += 20;
            course16.pointsQuantity += 40;
        }
        if (p10) {
            course6.pointsQuantity += 30;
            course3.pointsQuantity += 30;
            course13.pointsQuantity += 30;
            course11.pointsQuantity += 10;

        }
        if (p11) {
            course8.pointsQuantity += 40;
            course7.pointsQuantity += 40;
            course10.pointsQuantity += 20;
        }
        if (p12) {
            course5.pointsQuantity += 30;
            course13.pointsQuantity += 40;
            course11.pointsQuantity += 30;
        }
        if (p13) {
            course5.pointsQuantity += 20;
            course4.pointsQuantity += 20;
            course7.pointsQuantity += 30;
            course9.pointsQuantity += 30;
        }
        if (p14) {
            course1.pointsQuantity += 40;
            course2.pointsQuantity += 30;
            course4.pointsQuantity += 30;
        }
        if (p15) {
            course11.pointsQuantity += 30;
            course13.pointsQuantity += 30;
            course7.pointsQuantity += 40;
        }
        if (p16) {
            course14.pointsQuantity += 30;
            course17.pointsQuantity += 30;
            course15.pointsQuantity += 40;
        }
        if (p17) {
            course1.pointsQuantity += 60;
            course4.pointsQuantity += 40;
        }
        if (p18) {
            course3.pointsQuantity += 20;
            course14.pointsQuantity += 30;
            course17.pointsQuantity += 30;
            course12.pointsQuantity += 20;
        }
        if (p19) {
            course8.pointsQuantity += 30;
            course7.pointsQuantity += 30;
            course9.pointsQuantity += 30;
            course10.pointsQuantity += 10;
        }
        if (p20) {
            course14.pointsQuantity += 30;
            course13.pointsQuantity += 30;
            course7.pointsQuantity += 30;
            course8.pointsQuantity += 10;
        }
        if (p21) {
            course5.pointsQuantity += 30;
            course14.pointsQuantity += 30;
            course17.pointsQuantity += 30;
            course16.pointsQuantity += 10;
        }
        if (p22) {
            course10.pointsQuantity += 20;
            course15.pointsQuantity += 20;
            course8.pointsQuantity += 20;
            course13.pointsQuantity += 30;
        }
        if (p23) {
            course1.pointsQuantity += 30;
            course3.pointsQuantity += 30;
            course5.pointsQuantity += 20;
            course2.pointsQuantity += 20;
        }
        if (p24) {
            course10.pointsQuantity += 20;
            course8.pointsQuantity += 20;
            course1.pointsQuantity += 20;
            course4.pointsQuantity += 20;
            course5.pointsQuantity += 20;
        }
        if (p25) {
            course10.pointsQuantity += 40;
            course6.pointsQuantity += 40;
            course10.pointsQuantity += 30;
        }
        if (p26) {
            course4.pointsQuantity += 20;
            course6.pointsQuantity += 20;
            course5.pointsQuantity += 20;
            course8.pointsQuantity += 20;
            course7.pointsQuantity += 20;
        }
        if (p27) {
            course5.pointsQuantity += 30;
            course13.pointsQuantity += 30;
            course11.pointsQuantity += 30;
            course16.pointsQuantity += 10;
        }
        if (p28) {
            course1.pointsQuantity += 50;
            course2.pointsQuantity += 50;
        }
        if (p29) {
            course10.pointsQuantity += 50;
            course6.pointsQuantity += 50;
        }
        if (p30) {
            course5.pointsQuantity += 40;
            course6.pointsQuantity += 60;
        }


        var courses = [
            course1,
            course2,
            course3,
            course4,
            course5,
            course6,
            course7,
            course8,
            course9,
            course10,
            course11,
            course12,
            course13,
            course14,
            course15,
            course16,
            course17
        ];

        let n, i, k;
        let aux;
        n = courses.length;
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (courses[i].pointsQuantity < courses[i + 1].pointsQuantity) {
                    aux = courses[i];
                    courses[i] = courses[i + 1];
                    courses[i + 1] = aux;
                }
            }
        }
        setQuantityCourse1(courses[0].pointsQuantity);
        setQuantityCourse2(courses[1].pointsQuantity);
        setQuantityCourse3(courses[2].pointsQuantity);
        setNameCourse1(courses[0].name);
        setNameCourse2(courses[1].name);
        setNameCourse3(courses[2].name);

        console.log(courses);
    }
    const data = {
        labels: [nameCourse1, nameCourse2, nameCourse3],
        datasets: [
            {
                label: 'Carreras mas recomendadas.',
                data: [quantityCourse1, quantityCourse2, quantityCourse3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };



    return (
        <div>
            <form>
                <div class="mb-3" >

                    <h3>Prueba de aptitudes y actitudes</h3>
                    <div className='qContainer'>
                        <label className='form-labe'>Las personas que me conocen dicen que soy creativo y que, produzco ideas originales y divertidas.</label><br />
                        <label>No</label><RadioButton name="p1" onChange={(e) => setP1(false)} checked={p1 === false} /> <br />
                        <label>Si</label><RadioButton name="p1" onChange={(e) => setP1(true)} checked={p1 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Me resulta más fácil expresar mis pensamientos, sensaciones y emociones con palabras.</label><br />
                        <label>No</label><RadioButton name="p2" inputId="p2" onChange={(e) => setP2(false)} checked={p2 === false} /><br />
                        <label>Si</label><RadioButton name="p2" inputId="p2" onChange={(e) => setP2(true)} checked={p2 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Siempre me intereso por superar mis habilidades físicas y jugar en equipo. Siento placer realizando deportes.</label><br />
                        <label>No</label><RadioButton name="p3" onChange={(e) => setP3(false)} checked={p3 === false} /><br />
                        <label>Si</label><RadioButton name="p3" onChange={(e) => setP3(true)} checked={p3 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Tengo buena memoria y no me cuesta estudiar y retener fórmulas y palabras técnicas.</label><br />
                        <label>No</label><RadioButton name="p4" onChange={(e) => setP4(false)} checked={p4 === false} /><br />
                        <label>Si</label><RadioButton name="p4" onChange={(e) => setP4(true)} checked={p4 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Tiendo a cuestionar todo y convencer fácilmente a otras personas sobre la validez de mis argumentos.</label><br />
                        <label>No</label><RadioButton name="p5" onChange={(e) => setP5(false)} checked={p5 === false} /><br />
                        <label>Si</label><RadioButton name="p5" onChange={(e) => setP5(true)} checked={p5 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Puedo inferir posibles desarrollos y consecuencias futuras, a partir de la observación de una situación.</label><br />
                        <label>No</label><RadioButton name="p6" onChange={(e) => setP6(false)} checked={p6 === false} /><br />
                        <label>Si</label><RadioButton name="p6" onChange={(e) => setP6(true)} checked={p6 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Tengo un pensamiento organizado, tiendo a armar esquemas, establecer un orden y sistematizar.</label><br />
                        <label>No</label><RadioButton name="p7" onChange={(e) => setP7(false)} checked={p7 === false} /><br />
                        <label>Si</label><RadioButton name="p7" onChange={(e) => setP7(true)} checked={p7 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Soy capaz de captar lo que otro siente y ayudarlo a sentirse mejor.
                        </label><br />
                        <label>No</label><RadioButton name="p8" onChange={(e) => setP8(false)} checked={p8 === false} /><br />
                        <label>Si</label><RadioButton name="p8" onChange={(e) => setP8(true)} checked={p8 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Me salta a la vista rápidamente cuando algo no concuerda con el entorno y me resulta difícil no tenerlo en cuenta.</label><br />
                        <label>No</label><RadioButton name="p9" onChange={(e) => setP9(false)} checked={p9 === false} /><br />
                        <label>Si</label><RadioButton name="p9" onChange={(e) => setP9(true)} checked={p9 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Me estimula más la etapa de análisis de las cosas que su ejecución.</label><br />
                        <label>No</label><RadioButton name="p10" onChange={(e) => setP10(false)} checked={p10 === false} /><br />
                        <label>Si</label><RadioButton name="p10" onChange={(e) => setP10(true)} checked={p10 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Estaría dispuesto a renunciar a un momento placentero para ofrecer mi servicio como profesional.</label><br />
                        <label>No</label><RadioButton name="p11" onChange={(e) => setP11(false)} checked={p11 === false} /><br />
                        <label>Si</label><RadioButton name="p11" onChange={(e) => setP11(true)} checked={p11 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Me interesaría implementar procesos que organizan las tareas de los empleados de una empresa.</label><br />
                        <label>No</label><RadioButton name="p12" onChange={(e) => setP12(false)} checked={p12 === false} /><br />
                        <label>Si</label><RadioButton name="p12" onChange={(e) => setP12(true)} checked={p12 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Para mí es altamente relevante que mi profesión me asegure una salida laboral.</label><br />
                        <label>No</label><RadioButton name="p13" onChange={(e) => setP13(false)} checked={p13 === false} /><br />
                        <label>Si</label><RadioButton name="p13" onChange={(e) => setP13(true)} checked={p13 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Si pudiera elegir, pasaría mucho tiempo diseñando novedosos objetos o edificios en mi computadora.</label><br />
                        <label>No</label><RadioButton name="p14" onChange={(e) => setP14(false)} checked={p14 === false} /><br />
                        <label>Si</label><RadioButton name="p14" onChange={(e) => setP14(true)} checked={p14 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Creo que el dinero no es lo más importante a tener en cuenta en la elección de una carrera.</label><br />
                        <label>No</label><RadioButton name="p15" onChange={(e) => setP15(false)} checked={p15 === false} /><br />
                        <label>Si</label><RadioButton name="p15" onChange={(e) => setP15(true)} checked={p15 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Me agradaría un trabajo activo y de ritmo acelerado.</label><br />
                        <label>No</label><RadioButton name="p16" onChange={(e) => setP16(false)} checked={p16 === false} /><br />
                        <label>Si</label><RadioButton name="p16" onChange={(e) => setP16(true)} checked={p16 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>En el futuro me imagino trabajando en lugares relacionados con la cultura y el arte.
                        </label><br />
                        <label>No</label><RadioButton name="p17" onChange={(e) => setP17(false)} checked={p17 === false} /><br />
                        <label>Si</label><RadioButton name="p17" onChange={(e) => setP17(true)} checked={p17 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Me imagino trabajando en ámbitos variados, no podría trabajar encerrado en una oficina o pasar mucho tiempo en el mismo lugar.</label><br />
                        <label>No</label><RadioButton name="p18" onChange={(e) => setP18(false)} checked={p18 === false} /><br />
                        <label>Si</label><RadioButton name="p18" onChange={(e) => setP18(true)} checked={p18 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Me gustaría tener un trabajo en el que tuviera que compartir espacios y tareas con profesionales de la salud.</label><br />
                        <label>No</label><RadioButton name="p19" onChange={(e) => setP19(false)} checked={p19 === false} /><br />
                        <label>Si</label><RadioButton name="p19" onChange={(e) => setP19(true)} checked={p19 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Estar alrededor de un grupo de personas te da energía</label><br />
                        <label>No</label><RadioButton name="p20" onChange={(e) => setP20(false)} checked={p20 === false} /><br />
                        <label>Si</label><RadioButton name="p20" onChange={(e) => setP20(true)} checked={p20 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Rápidamente te involucras en la vida social de un nuevo lugar de trabajo.</label><br />
                        <label>No</label><RadioButton name="p21" onChange={(e) => setP21(false)} checked={p21 === false} /><br />
                        <label>Si</label><RadioButton name="p21" onChange={(e) => setP21(true)} checked={p21 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Cuantas más personas hablas, mejor te sientes.</label><br />
                        <label>No</label><RadioButton name="p22" onChange={(e) => setP22(false)} checked={p22 === false} /><br />
                        <label>Si</label><RadioButton name="p22" onChange={(e) => setP22(true)} checked={p22 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Prefieres las conversaciones y las relaciones uno-a-uno en comparación con una amplia variedad de relaciones con muchas personas.</label><br />
                        <label>No</label><RadioButton name="p23" onChange={(e) => setP23(false)} checked={p23 === false} /><br />
                        <label>Si</label><RadioButton name="p23" onChange={(e) => setP23(true)} checked={p23 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Piensas y reflexionas primero antes de actuar.</label><br />
                        <label>No</label><RadioButton name="p24" onChange={(e) => setP24(false)} checked={p24 === false} /><br />
                        <label>Si</label><RadioButton name="p24" onChange={(e) => setP24(true)} checked={p24 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Eres reservado y distante con tu comunicación.</label><br />
                        <label>No</label><RadioButton name="p25" onChange={(e) => setP25(false)} checked={p25 === false} /><br />
                        <label>Si</label><RadioButton name="p25" onChange={(e) => setP25(true)} checked={p25 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Es esencial para tí probar cosas con mis propias manos.</label><br />
                        <label>No</label><RadioButton name="p26" onChange={(e) => setP26(false)} checked={p26 === false} /><br />
                        <label>Si</label><RadioButton name="p26" onChange={(e) => setP26(true)} checked={p26 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Te sientes cómodo trabajando con información / datos ambiguos o incompletos y adivino su significado.</label><br />
                        <label>No</label><RadioButton name="p27" onChange={(e) => setP27(false)} checked={p27 === false} /><br />
                        <label>Si</label><RadioButton name="p27" onChange={(e) => setP27(true)} checked={p27 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Tienes una imaginación vívida.</label><br />
                        <label>No</label><RadioButton name="p28" onChange={(e) => setP28(false)} checked={p28 === false} /><br />
                        <label>Si</label><RadioButton name="p28" onChange={(e) => setP28(true)} checked={p28 === true} />
                    </div>
                    <br />
                    <div className='qContainer'>
                        <label className='form-labe'>Aceptas el conflicto como una parte natural y normal de las relaciones.</label><br />
                        <label>No</label><RadioButton name="p29" onChange={(e) => setP29(false)} checked={p29 === false} /><br />
                        <label>Si</label><RadioButton name="p29" onChange={(e) => setP29(true)} checked={p29 === true} />
                    </div>
                    < br />
                    <div className='qContainer'>
                        <label className='form-labe'>Desearías que otras personas fueran más lógicas.</label><br />
                        <label>No</label><RadioButton name="p30" onChange={(e) => setP30(false)} checked={p30 === false} /><br />
                        <label>Si</label><RadioButton name="30" onChange={(e) => setP30(true)} checked={p30 === true} />
                    </div>
                    <br />

                    <button type="button" class="btn btn-primary" onClick={submit}>Finalizar</button>

                </div>
            </form >
            <div className='mb-3'>
                <Doughnut data={data} />
            </div>

        </div >
    )
}

export default Test
