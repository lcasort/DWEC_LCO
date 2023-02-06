////////////////////////////////// APARTADO A ////////////////////////////////// 
// ¿Qué es la fase de captura y de burbujeo al producirse un evento?          //
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// APARTADO B ////////////////////////////////// 
// ¿Qué utilidad tiene la función stopPropagation?                            //
//****************************************************************************//
// Método que para la propogación del evento actual en las fases de           //
// captura y burbujeo.                                                        //
// Aún así, no para ninguno de los comportamientos por defecto; por ejemplo,  //
// los clicks en los links se siguen procesando. Para parar estos tenemos que //
// usar preventDefault().                                                     //
// No para la propagación inmediata a otros controladores de eventos. Si      //
// quieres paralos, se usa stopImmediatePropagation().                        //
////////////////////////////////////////////////////////////////////////////////