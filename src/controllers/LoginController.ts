import { Router, Request, Response, NextFunction } from 'express';
import { get } from './decoractors/routes';
import { controller } from './decoractors/controllers';

@controller('/auth')
class LoginController {
	@get('/login')
	getLogin(req: Request, res: Response) {
		res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input  name="password" type="password" />
                </div>
                <button>Submit</button>
            </form>
        `);
	}
}
