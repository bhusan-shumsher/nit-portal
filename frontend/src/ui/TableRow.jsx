

export default function TableRow({subjectCode, subjectName, creditHour}){
    return(
        <tr>
                <td>
                <div className="form-check check-tables">
                <input className="form-check-input" type="checkbox" value="something"/>
                </div>
                </td>
                <td>{subjectCode}</td>
                <td>
                <h2>
                <a>{subjectName}</a>
                </h2>
                </td>
                <td>{creditHour}</td>
                <td className="text-end">
                <div className="actions">
                <a href="javascript:;" className="btn btn-sm bg-success-light me-2">
                <i className="feather-eye"></i>
                </a>

                </div>
                </td>
</tr>
    );
}